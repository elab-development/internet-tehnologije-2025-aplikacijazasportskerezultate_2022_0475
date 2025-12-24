import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sportski rezultati",
  description: "Praćenje sportskih rezultata i statistika",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body>
        {/* Header */}
        <header>
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo + naziv */}
            <div style={{ display: "flex", alignItems: "center"}}>
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
              </Link>
              <span style={{ fontSize: "1.4rem", fontWeight: "bold", color: "white"}}>
                LiveScore
              </span>
            </div>

            {/* Dugmad */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href="/login">
                <button className="nav-button">Login</button>
              </Link>
              <Link href="/register">
                <button className="nav-button">Register</button>
              </Link>
              <Link href="/contact">
                <button className="nav-button">Kontakt</button>
              </Link>
            </div>
          </nav>
        </header>

        <div className="sub-header">
          <nav>
            <Link href="/events?sport=fudbal">
              <img src="/football.png" alt="Football" className="sport-icon" />
              FOOTBALL
            </Link>
            <Link href="/events?sport=kosarka">
              <img src="/basketball.png" alt="Basketball" className="sport-icon" />
              BASKETBALL
            </Link>
            <Link href="/events?sport=tenis">
              <img src="/tennis.png" alt="Tennis" className="sport-icon" />
              TENNIS
            </Link>
            <Link href="/events?sport=mma">
             <img src="/mma.png" alt="MMA" className="sport-icon" />
             MMA
            </Link>
          </nav>
        </div>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer>
          &copy; 2025 LiveScore | All rights reserved
        </footer>
      </body>
    </html>
  );
}
