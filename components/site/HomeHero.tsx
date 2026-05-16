"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { vatmastersAsset } from "@/lib/vatmastersOrigin";

const IMG = {
  heroBg: vatmastersAsset("/assets/frame-10_compressed-BHDADcil.webp?w=900&imagetools"),
  heroGrid: vatmastersAsset("/assets/group-14_compressed-DvvFeC3n.webp?w=1200&imagetools"),
  logo: vatmastersAsset("/assets/Vat-Master-Logo-1_compressed-laDxxejj.webp?w=200&imagetools"),
  model: vatmastersAsset("/assets/image_compressed-CuNxSwGS.webp?w=450&imagetools"),
  aedHero: vatmastersAsset("/assets/AED-Symbol_compressed-B7ab4-CO.webp?w=24&imagetools"),
  stackBg: vatmastersAsset("/assets/bg-cardStack_compressed-DCjTu7QY.webp?w=400&imagetools"),
};

const SERVICE_LINKS = [
  { label: "VAT Registration", path: "/vat-registration" },
  { label: "VAT De-Registration", path: "/vat-de-registration" },
  { label: "Outsource CFO Service", path: "/outsource-cfo-service" },
  { label: "Accounting and Bookkeeping", path: "/accounting-and-bookkeeping-services" },
  { label: "VAT Return Filing", path: "/vat-return-filling" },
  { label: "corporate tax Filing", path: "/corporate-tax-filing-in-uae" },
];

const PRICE_LINKS = [
  { label: " VAT Registration", path: "/pricing-vat-registration" },
  { label: " VAT Accounting Bookkeeping", path: "/priceVatAccount" },
  { label: " VAT De-Registration", path: "/priceVatDeregister" },
  { label: " Outsource CFO", path: "/priceOutsource" },
  { label: " VAT Return Filing", path: "/priceVatReturn" },
];

function mapPath(path: string) {
  if (PRICE_LINKS.some((x) => x.path === path)) return "/#pricing";
  return "/#services";
}

function HamburgerIcon() {
  return (
    <span className="hh-hamLines">
      <span className="hh-hamLine" />
      <span className="hh-hamLine hh-hamLine--mt" />
      <span className="hh-hamLine hh-hamLine--mt" />
    </span>
  );
}

function CheckIcon({ small }: { small?: boolean }) {
  return <span className={`hh-check ${small ? "hh-check--small" : ""}`}>✓</span>;
}

function ContactArrowSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="hh-icon"
      fill="none"
      stroke="#0B2F35"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function StackArrowSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="hh-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function StackCarousel() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const busyRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const positions = [
    { x: 0, y: 0, r: 0, s: 1 },
    { x: -16, y: -18, r: -12, s: 0.985 },
    { x: -28, y: -30, r: -18, s: 0.97 },
    { x: -40, y: -42, r: -24, s: 0.955 },
  ];

  const toTransform = (p: { x: number; y: number; r: number; s: number }) =>
    `translate3d(${p.x}px,${p.y}px,0) rotate(${p.r}deg) scale(${p.s})`;

  const layout = () => {
    Array.from(rootRef.current?.querySelectorAll<HTMLDivElement>(".hh-stack-card") ?? []).forEach(
      (el) => {
        const pos = Number(el.dataset.pos);
        el.style.transform = toTransform(positions[pos] ?? positions[0]!);
        el.style.zIndex = String(400 - pos);
      },
    );
  };

  useLayoutEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => layout()));
  });

  const step = () => {
    if (busyRef.current) return;
    busyRef.current = true;
    const cards = Array.from(rootRef.current?.querySelectorAll<HTMLDivElement>(".hh-stack-card") ?? []);
    const front = cards.find((c) => Number(c.dataset.pos) === 0);
    if (!front) {
      busyRef.current = false;
      return;
    }
    front.style.transform = "translate3d(62px,34px,0) rotate(-16deg) scale(0.98)";
    const onEnd = (ev: TransitionEvent) => {
      if (ev.propertyName !== "transform") return;
      front.removeEventListener("transitionend", onEnd);
      cards.forEach((Me) => {
        const V = Number(Me.dataset.pos);
        Me.dataset.pos = String(V === 0 ? 3 : V - 1);
      });
      requestAnimationFrame(() => {
        layout();
        setTimeout(() => {
          busyRef.current = false;
        }, 60);
        schedule();
      });
    };
    front.addEventListener("transitionend", onEnd);
  };

  const schedule = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => step(), 6000);
  };

  useEffect(() => {
    const kick = () => schedule();
    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(
        kick,
      );
    } else {
      kick();
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  });

  const items = [
    {
      title: "Vat Registration",
      desc: "Get your business VAT-registered quickly and hassle-free. We handle documentation, FTA approvals, and compliance from start to finish.",
    },
    {
      title: "VAT Return Filing",
      desc: "Accurate VAT return filing with reconciliations, deadline tracking, and full compliance support handled end to end.",
    },
    {
      title: "VAT De-registration",
      desc: "Complete VAT deregistration support including documentation, FTA coordination, approvals, and smooth business closure.",
    },
    {
      title: "Corporate Tax",
      desc: "Corporate tax registration and filing assistance with structured documentation, advisory, and end to end compliance.",
    },
  ];

  const hues = ["#00E6F6", "#2FE9FF", "#22D3EE", "#34F5FF"];

  const StackCard = ({ pos, title, desc }: { pos: string; title: string; desc: string }) => (
    <div className="hh-stack-card" data-pos={pos}>
      <div className="hh-stack-cardBox">
        <div
          className="hh-stack-bgImg"
          style={{
            backgroundImage: `url(${IMG.stackBg})`,
            filter: "contrast(1.1) saturate(1.1) brightness(1.05)",
          }}
        />
        <div
          className="hh-stack-tint"
          style={{ backgroundColor: hues[Number(pos) % hues.length] }}
        />
        <div className="hh-stack-dark" />
        <div className="hh-stack-glass" />
        <div className="hh-stack-gridX" />
        <div className="hh-stack-gridY" />
        <div className="hh-stack-content">
          <div className="d-flex align-items-start justify-content-between hh-gap4">
            <p className="hh-stack-title">{title}</p>
            <span className="hh-stack-arrow">
              <StackArrowSvg />
            </span>
          </div>
          <p className="hh-stack-desc">{desc}</p>
        </div>
        <div className="hh-stack-ring" />
      </div>
    </div>
  );

  const [mountCards, setMountCards] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMountCards(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!mountCards) {
    return (
      <div className="hh-stackOuter">
        <div className="hh-stackSize" />
      </div>
    );
  }

  return (
    <div className="hh-stackOuter">
      <div className="hh-stackSize">
        <div ref={rootRef} className="hh-stackAbs">
          {items.map((it, idx) => (
            <StackCard key={idx} pos={String(idx)} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomeHero() {
  const router = useRouter();

  const [heroReady, setHeroReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [backdropReady, setBackdropReady] = useState(false);
  const [animatingClose, setAnimatingClose] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<null | "Services" | "Pricing">(null);
  const [mobileExpand, setMobileExpand] = useState<null | "Services" | "Pricing">(null);

  const navRef = useRef<HTMLElement | null>(null);

  const closeMobile = () => {
    setBackdropReady(false);
    setAnimatingClose(true);
    setTimeout(() => {
      setMenuOpen(false);
      setAnimatingClose(false);
      setMobileExpand(null);
    }, 450);
  };

  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      requestAnimationFrame(() => setBackdropReady(true));
    } else {
      setBackdropReady(false);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen && !animatingClose) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen, animatingClose]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const go = (path: string, closeMobileMenu?: boolean) => {
    if (closeMobileMenu) closeMobile();
    if (path === "/contact") {
      router.push("/contact");
      return;
    }
    if (path === "/about") {
      router.push("/#about");
      return;
    }
    router.push(mapPath(path));
  };

  const DesktopNavInner = () => (
    <>
      <span role="presentation" className="hh-navLink cursor-pointer" onClick={() => router.push("/")}>
        Home
      </span>
      <div className="hh-dd">
        <span
          role="button"
          tabIndex={0}
          className="hh-navLink hh-ddTrigger cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setOpenDesktop(openDesktop === "Services" ? null : "Services");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpenDesktop(openDesktop === "Services" ? null : "Services");
            }
          }}
        >
          Services
        </span>
        {openDesktop === "Services" && (
          <div className="hh-ddPopover">
            <div className="hh-ddMenu">
              {SERVICE_LINKS.map((D) => (
                <button
                  key={D.path}
                  type="button"
                  className="hh-ddItem"
                  onClick={() => {
                    go(D.path);
                    setOpenDesktop(null);
                  }}
                  style={{ background: "transparent", border: 0, width: "100%", textAlign: "left" }}
                >
                  {D.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="hh-dd">
        <span
          role="button"
          tabIndex={0}
          className="hh-navLink hh-ddTrigger cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setOpenDesktop(openDesktop === "Pricing" ? null : "Pricing");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpenDesktop(openDesktop === "Pricing" ? null : "Pricing");
            }
          }}
        >
          Pricing
        </span>
        {openDesktop === "Pricing" && (
          <div className="hh-ddPopover">
            <div className="hh-ddMenu">
              {PRICE_LINKS.map((D) => (
                <button
                  key={D.path}
                  type="button"
                  className="hh-ddItem"
                  onClick={() => {
                    go(D.path);
                    setOpenDesktop(null);
                  }}
                  style={{ background: "transparent", border: 0, width: "100%", textAlign: "left" }}
                >
                  {D.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <span
        role="presentation"
        className="hh-navLink cursor-pointer"
        onClick={() => router.push("/#about")}
      >
        About&nbsp;Us
      </span>
    </>
  );

  const MobileSection = ({
    label,
    items,
  }: {
    label: "Services" | "Pricing";
    items: { label: string; path: string }[];
  }) => {
    const open = mobileExpand === label;
    return (
      <div className="d-flex flex-column">
        <button
          type="button"
          onClick={() => setMobileExpand((p) => (p === label ? null : label))}
          className="hh-mLinkBtn"
          aria-expanded={open}
        >
          <span className="d-flex align-items-center gap-2">
            {label}
            <span
              style={{
                fontSize: "12px",
                transition: "transform 200ms ease",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              ▼
            </span>
          </span>
        </button>
        {open && (
          <div className="hh-mDrop">
            {items.map((ma) => (
              <button
                key={ma.path}
                type="button"
                className="hh-mDropItem"
                onClick={() => {
                  go(ma.path, true);
                  setMobileExpand(null);
                }}
                style={{ background: "transparent", border: 0, width: "100%", textAlign: "left" }}
              >
                {ma.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id="home"
      className="hh-section"
      style={{
        background: `url(${IMG.heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="hh-gridOverlay">
        <img src={IMG.heroGrid} alt="" className="hh-gridImg hh-gridImg--left" draggable={false} />
        <img src={IMG.heroGrid} alt="" className="hh-gridImg hh-gridImg--right" draggable={false} />
      </div>
      <header className="hh-header">
        <div className="d-flex align-items-center justify-content-between">
          <div className="hh-logoWrap">
            <Link href="/" className="hh-navLink">
              <img src={IMG.logo} alt="VAT Masters" className="hh-logo" draggable={false} />
            </Link>
          </div>
          <div className="d-flex align-items-center hh-gap3">
            <div className="d-none d-lg-flex align-items-center hh-gap2">
              <Link href="/contact" className="hh-contactBtn">
                Contact Us
              </Link>
              <Link href="/contact" className="hh-contactArrow cursor-pointer" aria-hidden>
                <ContactArrowSvg />
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="hh-hamburger d-lg-none"
              aria-label="Open menu"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </header>
      <nav ref={navRef} className="hh-desktopNav d-none d-lg-flex">
        <DesktopNavInner />
      </nav>
      {(menuOpen || animatingClose) && (
        <div className="hh-menuOverlay d-lg-none">
          <button
            type="button"
            className={`hh-menuBackdrop ${backdropReady ? "is-ready" : ""}`}
            onClick={closeMobile}
            aria-label="Close menu"
          />
          <div className={`hh-menuPanel ${backdropReady ? "is-ready" : ""}`}>
            <div className="d-flex align-items-center justify-content-end p-2">
              <button type="button" onClick={closeMobile} className="hh-menuClose" aria-label="Close">
                <span className="hh-menuCloseX">×</span>
              </button>
            </div>
            <div className="px-4 pb-5">
              <div className="d-flex flex-column hh-gap4 hh-mLinks">
                <a href="#home" className="hh-mLink" onClick={closeMobile}>
                  Home
                </a>
                <MobileSection label="Services" items={SERVICE_LINKS} />
                <MobileSection label="Pricing" items={PRICE_LINKS} />
                <a href="#about" className="hh-mLink" onClick={closeMobile}>
                  About&nbsp;Us
                </a>
              </div>
              <button
                type="button"
                onClick={() => {
                  router.push("/contact");
                  closeMobile();
                }}
                className="hh-menuContact"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={`hh-hero ${heroReady ? "is-ready" : ""}`}>
        <div className="hh-heroTop">
          <div className="row">
            <div className="col-12 col-lg-5 order-1">
              <div className="hh-leftPad">
                <h1 className="hh-h1">
                  <span className="hh-h1Line">
                    Best <span className="hh-cyan">VAT</span>
                  </span>
                  <span className="hh-h1Line hh-cyan">Consulting</span>
                  <span className="hh-h1Line">Firm in UAE</span>
                </h1>
                <ul className="hh-bullets">
                  {[
                    "We offer TAX Service for Business across UAE",
                    "Best VAT Registration company in Dubai",
                    "Recognized by Businesses Across Industries",
                  ].map((t, i) => (
                    <li key={i} className="hh-bulletItem">
                      <CheckIcon />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="hh-ctaRow">
                  <a className="hh-btnWhatsapp cert-vm-wa-btn" href="https://wa.me/971525966056">
                    <i className="bi bi-whatsapp me-2" aria-hidden />
                    WhatsApp us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 order-2 d-flex justify-content-center">
              <div className="hh-modelWrap">
                <div className="hh-modelFrame">
                  <img
                    src={IMG.model}
                    alt="VAT Masters Consultant"
                    className="hh-modelImg"
                    style={{
                      height: "100%",
                      filter:
                        "drop-shadow(0 26px 58px rgba(0,0,0,0.20)) brightness(1.01) contrast(1.02) saturate(1.02)",
                    }}
                    draggable={false}
                  />
                  <div
                    className="hh-modelFade"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(15,33,37,0) 0%, rgba(15,33,37,0.35) 65%, rgba(15,33,37,0.55) 100%)",
                      opacity: 0.25,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 order-3 d-flex justify-content-center">
              <div className="hh-rightWrap">
                <p className="hh-rightTitle jhew">
                  Avoid{" "}
                  <img src={IMG.aedHero} alt="" className="aedimg" /> 10,000 penalty by registering for Corporate
                  Tax today!
                </p>
                <div className="hh-rightGrid banera">
                  <div className="d-flex align-items-center hh-gap2">
                    <CheckIcon small /> Expert Guidance
                  </div>
                  <div className="d-flex align-items-center hh-gap2">
                    <CheckIcon small /> Fast Turnaround
                  </div>
                </div>
                <StackCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
