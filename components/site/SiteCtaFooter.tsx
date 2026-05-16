"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { vatmastersAsset } from "@/lib/vatmastersOrigin";

const FOOTER_LOGO = vatmastersAsset("/assets/image/Vat-Master-Logo-1_compressed.webp?w=200&imagetools");

export default function SiteCtaFooter() {
  const router = useRouter();

  return (
    <>
      <div style={{ position: "relative" }}>
        <section className="calltoaction" aria-label="Get in touch">
          <div className="ctafoot-ctaBox">
            <h2 className="ctafoot-title">
              Leading <span>Tax Experts in the UAE</span> Providing Reliable &amp; Compliant Advisory
              Services
            </h2>
            <a href="https://wa.me/971525966056" className="hh-btnWhatsapp">
              <i className="bi bi-whatsapp fs-5 fs-md-2 fs-lg-6" aria-hidden />
              WhatsApp us
            </a>
          </div>
        </section>
        <section className="ctafoot-section">
          <footer className="ctafoot-footer">
            <div className="ctafoot-footerGrid">
              <div className="ctafoot-brand">
                <img src={FOOTER_LOGO} alt="VAT Masters" />
                <p>
                  VAT Masters is a Leading Professional Accounting and VAT consulting firm with the highest
                  ethical and professional standards, We provide exceptional value to our customers,
                  employees and society
                </p>
                <div className="socpack-wrap">
                  <a
                    className="socpack-link"
                    href="https://www.facebook.com/people/VAT-Masters/100092346398329/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="bi bi-facebook" />
                  </a>
                  <a
                    className="socpack-link"
                    href="https://x.com/i/flow/login?redirect_after_login=%2FVAT_Masters"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                  >
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a
                    className="socpack-link"
                    href="https://www.instagram.com/vat_masters/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="bi bi-instagram" />
                  </a>
                  <a
                    className="socpack-link"
                    href="https://in.pinterest.com/vatmastersuae/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Pinterest"
                  >
                    <i className="bi bi-pinterest" />
                  </a>
                </div>
              </div>
              <div className="ctafoot-links">
                <p>Services</p>
                <ul>
                  <li role="presentation" onClick={() => router.push("/#services")}>
                    VAT Registration
                  </li>
                  <li role="presentation" onClick={() => router.push("/#pricing")}>
                    VAT Return Filing
                  </li>
                  <li role="presentation" onClick={() => router.push("/#pricing")}>
                    Accounting &amp; Bookkeeping
                  </li>
                  <li role="presentation" onClick={() => router.push("/#pricing")}>
                    Outsource CFO
                  </li>
                  <li role="presentation" onClick={() => router.push("/#services")}>
                    VAT De-Registration
                  </li>
                </ul>
              </div>
              <div className="ctafoot-links">
                <p>Quick Link</p>
                <ul>
                  <li role="presentation" onClick={() => router.push("/")}>
                    Home
                  </li>
                  <li role="presentation" onClick={() => router.push("/#about")}>
                    About Us
                  </li>
                  <li role="presentation" onClick={() => router.push("/#services")}>
                    Services
                  </li>
                  <li role="presentation">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="ctafoot-contact">
                <span>Contact</span>
                <p>
                  <i className="bi bi-geo-alt" /> Suite #17, The Iridium Building,{" "}
                  <b className="jed"> Al Barsha, Dubai, UAE</b>
                </p>
                <a href="mailto:sales@vatmasters.com" className="text-decoration-none">
                  <p>
                    <i className="bi bi-envelope" /> sales@vatmasters.com
                  </p>
                </a>
                <a href="tel:+971525966056" className="text-decoration-none">
                  <p>
                    <i className="bi bi-telephone" /> +971 52 596 6056
                  </p>
                </a>
              </div>
            </div>
            <div className="ctafoot-copy">vatmasters.com © 2026. All Rights Reserved</div>
          </footer>
        </section>
      </div>
    </>
  );
}
