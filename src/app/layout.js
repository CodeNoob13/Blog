import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeProvider from "./providers/ThemeProvider";
import { Inter, Open_Sans } from "next/font/google";
import Footer from "./components/footer/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Technology Blog",
  description: "First application created by Glenn!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="wrapper">
              <Navbar />

              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
