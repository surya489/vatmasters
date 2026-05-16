"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { vatmastersAsset } from "@/lib/vatmastersOrigin";

const BG = vatmastersAsset("/assets/Subtract-6_compressed-DJdO7gyY.webp");

const CLIENTS = [
  {
    name: "Ahamed Raza",
    title: "FM  ",
    company: "Bayzat",
    text: "VAT Masters delivered accurate VAT filing with clear guidance and full FTA compliance. Professional and reliable service.",
  },
  {
    name: "Daniel Joseph",
    title: "OD",
    company: "Careem",
    text: "Clear advice and smooth VAT filing ensured timely submission and complete regulatory compliance.",
  },
  {
    name: "Mohammed Faisal",
    title: "MP",
    company: "Property Finder",
    text: "Excellent VAT support with accurate documentation and prompt service throughout the process.",
  },
  {
    name: "Abdul Rahman",
    title: "AH",
    company: "YallaCompare",
    text: "Efficient VAT handling with error-free filing and strong compliance expertise.",
  },
  {
    name: "Karthik Raj",
    title: "Founder",
    company: "Zoho Middle East",
    text: "Outstanding VAT service with responsive support and accurate compliance from start to finish.",
  },
];

export default function TestimonialsSection() {
  const router = useRouter();
  const s = CLIENTS.length;
  const track = useMemo(() => [...CLIENTS, ...CLIENTS, ...CLIENTS], []);
  const [idx, setIdx] = useState(s);
  const rowH = 235;
  const dur = 800;
  const intervalMs = 3000;
  const elRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.transform = `translateY(-${s * rowH}px)`;
    requestAnimationFrame(() => {
      el.style.transition = `transform ${dur}ms ease-in-out`;
    });
  }, [s]);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIdx((e) => e + 1), intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    el.style.transition = `transform ${dur}ms ease-in-out`;
    el.style.transform = `translateY(-${idx * rowH}px)`;
    if (idx === 2 * s) {
      const t = setTimeout(() => {
        el.style.transition = "none";
        const u = s;
        el.style.transform = `translateY(-${u * rowH}px)`;
        setIdx(u);
        requestAnimationFrame(() => {
          el.style.transition = `transform ${dur}ms ease-in-out`;
        });
      }, dur);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [idx, s]);

  return (
    <section className="hometest-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0 pl-0">
            <div className="hometest-left">
              <div className="ts-leftCard">
                <img src={BG} alt="" className="ts-leftBg" draggable={false} />
                <Link
                  href="/contact"
                  className="ts-exploreBtn "
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/contact");
                  }}
                >
                  Explore More
                </Link>
                <div className="ts-leftTitleWrap">
                  <h2 className="ts-leftTitle">
                    What Our <br />
                    Client Say
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="ts-wrapper">
              <div ref={elRef} className="ts-track">
                {track.map((row, i) => (
                  <div key={`${row.name}-${i}`} className="ts-card">
                    <p>{row.name}</p>
                    <div className="ts-meta">
                      {row.title} • {row.company}
                    </div>
                    <p>{row.text}</p>
                    <div className="stars">★★★★★</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dots">
              {CLIENTS.map((_, r) => (
                <span
                  key={r}
                  className={`dot ${(((idx - s) % s) + s) % s === r ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
