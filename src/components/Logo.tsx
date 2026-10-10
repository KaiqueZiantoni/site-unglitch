interface Props {
  className?: string;
  comNome?: boolean;
}

export default function Logo({ className = "", comNome = true }: Props) {
  return (
    <a href="#inicio" className={`flex items-center gap-3 ${className}`} aria-label="Un-Glitch, voltar ao início">
      <img src="/logo.svg" alt="" className="h-8 w-8" />
      {comNome && (
        <span className="aberracao font-mono text-sm font-medium tracking-wide">un-glitch</span>
      )}
    </a>
  );
}
