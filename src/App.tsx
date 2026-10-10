import Nav from "./components/Nav";
import Hero from "./components/Hero";
import QuemSomos from "./components/QuemSomos";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#quem-somos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-texto focus:px-4 focus:py-2 focus:text-fundo"
      >
        Pular para o conteúdo
      </a>
      <Nav />
      <main>
        <Hero />
        <QuemSomos />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
