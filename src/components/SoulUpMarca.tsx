/** Wordmark da SoulUP reproduzido em texto: "soul" + selo "UP" amarelo. */
export default function SoulUpMarca({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`} aria-label="Soul Up">
      <span className="text-2xl font-bold leading-none tracking-tight text-white">soul</span>
      <span className="rounded-full bg-soul-amarelo px-1.5 py-0.5 text-[10px] font-bold leading-none text-soul-navy">
        UP
      </span>
    </span>
  );
}
