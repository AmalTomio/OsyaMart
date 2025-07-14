import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import NavBar from "../component/NavBar"; 
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: "My Next.js App",
  description: "Learning Next.js with Bootstrap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
