import { vatmastersAsset } from "@/lib/vatmastersOrigin";

const fs = "/extracted-site/fs.webp";
const ag = "/extracted-site/ag.webp";
const aed = vatmastersAsset("/assets/UAE_Dirham_Symboll_compressed-CDj-sC6B.webp?w=32&imagetools");

const WHATSAPP_PURCHASE = "https://wa.me/971525966056";

function purchaseWhatsAppHref(planTitle: string) {
  const text = encodeURIComponent(`Hello, I'd like to know more about ${planTitle} (pricing on vatmasters.com).`);
  return `${WHATSAPP_PURCHASE}?text=${text}`;
}

function PcCheck() {
  return (
    <span className="pc-check">
      <svg viewBox="0 0 24 24" className="pc-checkSvg" aria-hidden>
        <path
          d="M20 6L9 17l-5-5"
          fill="none"
          stroke="#0B2F35"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function PcArrow() {
  return (
    <span className="pc-arrowCircle">
      <svg viewBox="0 0 24 24" className="pc-arrowSvg" aria-hidden>
        <path
          d="M7 17L17 7M9 7h8v8"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

type Card = {
  key: string;
  title: string;
  titleIsP?: boolean;
  price: string;
  bullets: string[];
  note: [string, string];
  noteClass?: string;
  frameExtra?: string;
  bgClass: string;
  ctaExtra?: string;
};

const CARDS: Card[] = [
  {
    key: "vat-reg",
    title: "VAT Registration",
    price: "125",
    bullets: [
      "1 Single Registration for 1 firm/company",
      "Free VAT Consultancy",
      "Free CA Consultancy",
      "Free VAT Implementation Consultancy",
    ],
    note: ["Free Expert ", "Advice"],
    bgClass: "pc-cardBg h-sasfour",
    ctaExtra: "djd",
  },
  {
    key: "corp-tax",
    title: "Corporate Tax Registration",
    price: "125",
    bullets: ["30 minutes Live session", "Free VAT Consultancy", "Free CA Consultancy"],
    note: ["Complimentary", "Expert Advice"],
    noteClass: "pc-note-unorder pc-note-unorder-1",
    bgClass: "pc-cardBg",
  },
  {
    key: "vat-return",
    title: "VAT Return Filing",
    titleIsP: true,
    price: "499",
    bullets: [
      "VAT Filing & Reporting",
      "VAT Adjustment , Amendment & Refund",
      "Dedicated VAT Expert",
      "30 minutes Live session",
    ],
    note: ["Free Professional  ", "Guidance"],
    frameExtra: "dsdssadas",
    bgClass: "pc-cardBg h-sasfour",
    ctaExtra: "djd",
  },
  {
    key: "accounting",
    title: "Accounting & Bookkeeping",
    titleIsP: true,
    price: "499",
    bullets: [
      "Transactions < 100",
      "1 Hr Live session",
      "Dedicated Accounts Manager",
      "Full Accounting & Bank Reconciliation",
    ],
    note: ["Expert Advice ", "at No Cost"],
    bgClass: "pc-cardBg h-sasfour",
    ctaExtra: "djd",
  },
  {
    key: "cfo",
    title: "Outsource CFO",
    titleIsP: true,
    price: "499",
    bullets: [
      "1 Visit Monthly",
      "Free Accounting , VAT & CA Consultancy",
      "Financial Advisory & Accounting finalization",
    ],
    note: ["Free Consultation ", "by Experts"],
    noteClass: "pc-note-unorder",
    bgClass: "pc-cardBg ",
  },
  {
    key: "vat-dereg",
    title: "VAT De-Registration",
    titleIsP: true,
    price: "499",
    bullets: [
      "1 Single De-Registration for 1 firm/company",
      "Free VAT Consultancy",
      "Free CA Consultancy",
    ],
    note: ["No-Cost Expert ", "Advisory"],
    noteClass: "pc-note-unorder",
    frameExtra: "dsdssadas",
    bgClass: "pc-cardBg",
  },
];

export default function PricingSection() {
  return (
    <section className="pc-section bg-white" id="pricing">
      <div className="pc-shell mx-auto">
        <div className="pc-headerWrap  d-lg-block">
          <img src={ag} alt="" className="pc-headerImg" draggable={false} />
          <p className="pc-headerText">
            <span className="pc-headerSpan">
              We offer Fair Pricing on <br />
              <span className="primarss">All Services</span>
            </span>
          </p>
        </div>
        <div className="row g-3 g-lg-5">
          {CARDS.map((c) => (
            <div key={c.key} className="col-12 col-sm-6 col-lg-4">
              <div className="w-100">
                <div className={`pc-cardFrame ${c.frameExtra ?? ""}`.trim()}>
                  <img src={fs} alt="" className={c.bgClass.trim()} draggable={false} />
                  <div className="pc-cardInner">
                    <div className="pc-content">
                      {c.titleIsP ? (
                        <p className="pc-title pc-titleSpan">{c.title}</p>
                      ) : (
                        <h3 className="pc-title pc-titleSpan">{c.title}</h3>
                      )}
                      <div className="pc-pricePill">
                        <span className="pc-priceText">
                          Starts <img src={aed} alt="" className="priceaed" />{" "}
                          <span className="price">{c.price}</span>
                        </span>
                      </div>
                      <ul className="pc-bullets">
                        {c.bullets.map((b) => (
                          <li key={b} className="pc-bulletItem">
                            <span className="pc-bulletIcon">
                              <PcCheck />
                            </span>
                            <span className="pc-bulletText">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`pc-note ${c.noteClass ?? ""}`.trim()}>
                        <div className="pc-noteLine">{c.note[0]}</div>
                        <div className="pc-noteLine">{c.note[1]}</div>
                      </div>
                    </div>
                    <a
                      href={purchaseWhatsAppHref(c.title)}
                      className={`pc-ctaBtn ${c.ctaExtra ?? ""}`.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="pc-ctaBtnhh">
                        Purchase <PcArrow />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
