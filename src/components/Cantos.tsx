/** Quatro marcas de canto. O elemento pai precisa ter a classe `cantos`. */
export default function Cantos() {
  return (
    <>
      <span className="canto canto-tl" aria-hidden="true" />
      <span className="canto canto-tr" aria-hidden="true" />
      <span className="canto canto-bl" aria-hidden="true" />
      <span className="canto canto-br" aria-hidden="true" />
    </>
  );
}
