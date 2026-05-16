import type { ReactNode } from "react";
import Link from "next/link";
import { vatmastersAsset } from "@/lib/vatmastersOrigin";

const logo = vatmastersAsset("/assets/Vat-Master-Logo-1_compressed-laDxxejj.webp?w=200&imagetools");

export default function UsersLayout({ children }: { children: ReactNode }) {
  return (
    <div className="homepage-container" style={{ background: "#f4f7f8", minHeight: "100vh" }}>
      <header
        className="hh-header"
        style={{
          background: "#223b41",
          borderRadius: "0 0 32px 32px",
          margin: "0 0.5rem",
          paddingTop: "0.75rem",
        }}
      >
        <div className="d-flex usersPage align-items-center justify-content-between">
          <Link href="/" className="hh-navLink">
            <img src={logo} alt="VAT Masters" className="hh-logo" draggable={false} />
          </Link>
          <nav className="d-flex align-items-center hh-gap3">
            <Link href="/" className="hh-navLink text-white">
              Home
            </Link>
            <Link href="/contact" className="hh-navLink text-white">
              Contact
            </Link>
            <Link href="/users" className="hh-contactBtn">
              Users
            </Link>
          </nav>
        </div>
      </header>
      <div className="container py-5">{children}</div>
    </div>
  );
}
