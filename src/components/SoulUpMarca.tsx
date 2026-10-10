/** Wordmark da SoulUP reproduzido em texto: "soul" + selo "UP" amarelo. */
export default function SoulUpMarca({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`} aria-label="Soul Up">
      <span className="text-xl font-bold normal-case leading-none tracking-tight text-texto">soul</span>
      <span className="rounded-full bg-soul-amarelo px-1.5 py-0.5 text-[9px] font-bold leading-none text-fundo">
        UP
      </span>
    </span>
  );
}
