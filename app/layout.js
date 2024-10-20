import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Srdcom i telom",
  description:
    "Kresťanský fitness e-shop, kde nájdete štýlové a funkčné oblečenie s inšpiratívnymi kresťanskými motívmi. Spojte svoju vieru so zdravým životným štýlom a posilnite telo aj ducha.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
