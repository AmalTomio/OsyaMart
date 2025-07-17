import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import NavBar from "../component/NavBar";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: {
    default: "Osya Collection",
    template: "%s | Osya Collection",
  },
  description: "Your one-stop shop for fashion and electronics.",
  icons: {
    icon: "/logo_brand.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <footer className="text-center py-4">© 2025 OSYA</footer>
      </body>
    </html>
  );
}
