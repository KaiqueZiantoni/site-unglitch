import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

/** Barras do logo (x, y, largura) no espaço 640×640 do logo.svg; altura fixa de 35. */
const BARRAS: ReadonlyArray<readonly [number, number, number]> = [
  [195, 130, 110], [435, 130, 110],
  [115, 188, 110], [345, 188, 110],
  [165, 245, 110], [395, 245, 110],
  [140, 302, 110], [375, 302, 110],
  [148, 358, 107], [385, 358, 105],
  [155, 415, 330],
  [205, 472, 225],
];
const ESCALA = 110; // unidades do SVG por unidade 3D
const ALTURA = 35 / ESCALA;
const LARGURA_LOGO = (545 - 115) / ESCALA;
const ALTURA_LOGO = (507 - 130) / ESCALA;

interface Deslocamento {
  x: number; y: number; z: number; rx: number; ry: number; rz: number;
}

const aleatorio = (amplitude: number) => (Math.random() * 2 - 1) * amplitude;
const novoDeslocamento = (): Deslocamento => ({
  x: aleatorio(0.9), y: aleatorio(0.5), z: aleatorio(0.8),
  rx: aleatorio(0.6), ry: aleatorio(0.6), rz: aleatorio(0.5),
});

interface Props {
  /** Ref controlada pelo pai: true enquanto o usuário segura o clique/toque */
  segurando: React.MutableRefObject<boolean>;
  className?: string;
}

/**
 * Logo da Un-Glitch em 3D: flutua, segue o mouse e, enquanto o usuário segura,
 * se desmonta em glitch (aberração cromática + barras espalhadas). Ao soltar, recompõe.
 */
export default function Logo3D({ segurando, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      return; // sem WebGL: o pai mostra o SVG estático
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const cena = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    camera.position.z = 8;

    // Luz principal branca; vermelho e azul só tingem as bordas, como no logo
    cena.add(new THREE.AmbientLight(0xffffff, 1.1));
    const luz = new THREE.DirectionalLight(0xffffff, 2.2);
    luz.position.set(1.5, 3, 6);
    cena.add(luz);
    const luzVermelha = new THREE.PointLight(0xff3b1f, 2.5, 10);
    luzVermelha.position.set(-5, -1, 2);
    cena.add(luzVermelha);
    const luzAzul = new THREE.PointLight(0x3b5bff, 2.5, 10);
    luzAzul.position.set(5, 1, 2);
    cena.add(luzAzul);

    const grupo = new THREE.Group();
    cena.add(grupo);
    const material = new THREE.MeshStandardMaterial({ color: 0xf2efe6, roughness: 0.75, metalness: 0 });
    const geometrias: THREE.BufferGeometry[] = [];
    const barras = BARRAS.map(([x, y, w]) => {
      const geo = new RoundedBoxGeometry(w / ESCALA, ALTURA, ALTURA, 3, 0.08);
      geometrias.push(geo);
      const malha = new THREE.Mesh(geo, material);
      malha.position.set((x + w / 2 - 320) / ESCALA, -(y + 17.5 - 320) / ESCALA, 0);
      malha.userData.base = malha.position.clone();
      grupo.add(malha);
      return malha;
    });

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(cena, camera));
    const rgb = new ShaderPass(RGBShiftShader);
    rgb.uniforms.amount.value = 0.0025;
    composer.addPass(rgb);

    // Estado da animação
    const mouse = new THREE.Vector2(0, 0);
    const mouseSuave = new THREE.Vector2(0, 0);
    let glitch = 0;
    let deslocamentos = barras.map(novoDeslocamento);
    let ultimoSorteio = 0;
    const relogio = new THREE.Clock();

    const aoMover = (e: PointerEvent) => {
      mouse.set((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1));
    };
    window.addEventListener("pointermove", aoMover, { passive: true });

    const redimensionar = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      composer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      // Ajusta a escala para o logo caber com folga na largura e na altura visíveis
      const alturaVisivel = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const larguraVisivel = alturaVisivel * camera.aspect;
      const escala = Math.min(1.1, (larguraVisivel * 0.62) / LARGURA_LOGO, (alturaVisivel * 0.5) / ALTURA_LOGO);
      grupo.scale.setScalar(escala);
    };
    const observador = new ResizeObserver(redimensionar);
    observador.observe(el);
    redimensionar();

    let quadro = 0;
    const animar = () => {
      quadro = requestAnimationFrame(animar);
      const t = relogio.getElapsedTime();

      // Glitch sobe rápido ao segurar e volta devagar ao soltar
      const alvo = segurando.current ? 1 : 0;
      glitch += (alvo - glitch) * (alvo > glitch ? 0.12 : 0.06);

      // Enquanto segura, re-sorteia os deslocamentos a cada ~120ms para dar o tremor
      if (segurando.current && t - ultimoSorteio > 0.12) {
        deslocamentos = barras.map(novoDeslocamento);
        ultimoSorteio = t;
      }

      mouseSuave.lerp(mouse, 0.06);
      const flutuar = reduzirMovimento ? 0 : 1;
      grupo.rotation.y = mouseSuave.x * 0.45 + Math.sin(t * 0.35) * 0.08 * flutuar;
      grupo.rotation.x = -mouseSuave.y * 0.3 + Math.cos(t * 0.45) * 0.05 * flutuar;
      grupo.position.y = Math.sin(t * 0.9) * 0.06 * flutuar;

      barras.forEach((b, i) => {
        const d = deslocamentos[i];
        const base = b.userData.base as THREE.Vector3;
        b.position.set(base.x + d.x * glitch, base.y + d.y * glitch, base.z + d.z * glitch);
        b.rotation.set(d.rx * glitch, d.ry * glitch, d.rz * glitch);
      });

      const pico = glitch > 0.15 && Math.random() < 0.08 ? 0.012 : 0;
      rgb.uniforms.amount.value = 0.0025 + glitch * 0.012 + pico + Math.abs(mouseSuave.x) * 0.002;
      rgb.uniforms.angle.value = Math.PI * 0.5 + Math.sin(t * 0.7) * 0.4;

      composer.render();
    };
    animar();

    return () => {
      cancelAnimationFrame(quadro);
      observador.disconnect();
      window.removeEventListener("pointermove", aoMover);
      geometrias.forEach((g) => g.dispose());
      material.dispose();
      composer.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [segurando]);

  return <div ref={ref} className={`[&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full ${className}`} aria-hidden="true" />;
}
