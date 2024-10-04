import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  //esto es la forma en que nextjs pone un <head>
  title: "Mi tienda con Next JS",
  description: "Página principal de la tienda",
  //etc
};
//contiene toda la app

const roboto = Roboto({
  weight: ["300", "400"],
  subsets: ["latin"],
  styles: ["italic", "normal"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
