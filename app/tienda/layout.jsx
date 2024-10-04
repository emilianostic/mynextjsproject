import Link from "next/link";

export const metadata = {
    //esto es la forma en que nextjs pone un <head>
    title: "Tienda oficial",
   
    //etc
  };

function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>
        <ul>
          <li>
            <Link href="/tienda/productos">Productos</Link>
          </li>
          <li>
            <Link href="/tienda/productos/computers">Computadoras</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default TiendaLayout;
