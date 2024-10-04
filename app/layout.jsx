import Navbar from "../components/Navbar";
export const metadata = {
  //esto es la forma en que nextjs pone un <head>
  title: "Mi tienda con Next JS",
  description: "Página principal de la tienda",
  //etc
};
//contiene toda la app
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
