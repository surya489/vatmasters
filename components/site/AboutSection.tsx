import Link from "next/link";
import { vatmastersAsset } from "@/lib/vatmastersOrigin";

const IMG = {
  hero: vatmastersAsset("/assets/Subtract%2010_compressed-B1JsF3SR.webp"),
  heroMobile: vatmastersAsset("/assets/mobilePricing_compressed-DPlXLZqS.webp"),
  leftCard: vatmastersAsset("/assets/displayCard_compressed-Ffe7v6t1.webp?w=600&imagetools"),
  vatReg: vatmastersAsset("/assets/vtreg_compressed-B78geomr.webp?w=600&imagetools"),
  vatReturn: vatmastersAsset("/assets/vtr_compressed-D1jeZSlv.webp?w=600&imagetools"),
  accounting: vatmastersAsset("/assets/abt_compressed-L_N5BoDy.webp?w=600&imagetools"),
  consultancy: vatmastersAsset("/assets/vtcon_compressed-DOZkBNNh.webp"),
  cfo: vatmastersAsset("/assets/otc_compressed-06nVqHS4.webp?w=600&imagetools"),
  dereg: vatmastersAsset("/assets/vtd_compressed-PnZNVOUi.webp?w=600&imagetools"),
};

function CuTick() {
  return <span className="cu-tickDot">✓</span>;
}

function AboutTopBanner() {
  return (
    <div className="prize-vatcss">
      <section className="cu-page">
        <div className="cu-shell">
          <div className="cu-grid">
            <div className="cu-heroCard">
              <picture>
                <source media="(max-width: 575px)" srcSet={IMG.heroMobile} />
                <img
                  fetchPriority="high"
                  decoding="async"
                  className="cu-heroImg"
                  width={500}
                  height={500}
                  src={IMG.hero}
                  alt=""
                />
              </picture>
              <div className="cu-heroShade" />
              <h1 className="cu-heroTitle">About Us</h1>
              <div className="cu-cyanWrap">
                <div className="cu-cyanCard">
                  <div className="cu-cyanTitle">Tax Made Simple for You</div>
                  <div className="cu-cyanTicks">
                    <div className="cu-tickRow">
                      <CuTick /> Easy Documentation
                    </div>
                    <div className="cu-tickRow">
                      <CuTick /> Professional Guidance
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <aside className="cu-sideCard" aria-label="Highlight">
              <div className="cu-sideText">
                <div>Start Your Tax</div>
                <div>Journey with Ease</div>
                <div className="cu-sideSmall">Let VAT Masters handle</div>
                <div className="cu-sideSmall">your Corporate Tax</div>
                <div className="cu-sideSmall">Registration.</div>
              </div>
              <div className="cu-squares" aria-hidden>
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="cu-sideCircle" aria-hidden />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

const SERVICE_CARDS = [
  { title: "VAT Registration", img: IMG.vatReg },
  { title: "VAT Return Filing", img: IMG.vatReturn },
  { title: "Accounting & Bookkeeping", img: IMG.accounting },
  { title: "VAT & TAX Consultancy", img: IMG.consultancy },
  { title: "Outsource CFO", img: IMG.cfo },
  { title: "VAT De-Registration", img: IMG.dereg },
];

export default function AboutSection() {
  return (
    <section className="about-wrap" id="about">
      {/* <AboutTopBanner /> */}
      <div className="about-shell container-fluid">
        <div className="about-grid">
          <div className="about-leftRoot">
            <div className="about-leftMax">
              <div className="about-leftCard">
                <img src={IMG.leftCard} alt="" className="about-leftBg" draggable={false} />
                <div className="about-leftText">
                  <div className="about-leftBold">
                    <div className="about-lineWhite">
                      <span className="about-tClamp1">Leading VAT</span>
                    </div>
                    <div className="about-lineConsult">
                      <span className="about-tClamp1">Consulting</span>
                    </div>
                    <div className="about-lineDark">
                      <span className="about-tClamp2">Firm in</span>
                    </div>
                    <div className="about-lineUae">
                      <span className="about-tClamp2">UAE</span>
                    </div>
                  </div>
                </div>
                <Link href="#about" className="about-exploreBtn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="about-rightRoot">
            <div className="about-rightInner">
              <p className="about-title">About Us</p>
              <p className="about-para">
                A Leading Professional Accounting and VAT consulting firm with the highest ethical and
                professional standards, We provide exceptional value to our customers, employees and society.
                VAT Masters auditors pay special attention to hiring and retaining a highly skilled workforce,
                with appropriate training and motivation to achieve quality levels comparable to internationally
                expected standards.
              </p>
              <div className="about-bullets">
                <div className="about-bulletRow">
                  <i className="bi bi-check-circle-fill me-1 me-lg-2" />
                  <span className="about-bulletText">Live VAT Expert Advice</span>
                </div>
                <div className="about-bulletRow">
                  <i className="bi bi-check-circle-fill me-1 me-lg-2" />
                  <span className="about-bulletText">100 % Accuracy Guaranteed</span>
                </div>
                <div className="about-bulletRow">
                  <i className="bi bi-check-circle-fill me-1 me-lg-2" />
                  <span className="about-bulletText">On-Time FTA-Compliant Filing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-cardsWrap">
          {/* <div className="about-cardsGrid">
            {SERVICE_CARDS.map((card) => (
              <div key={card.title} className="svc-card">
                <div className="svc-icon">
                  <img loading="lazy" decoding="async" width={120} height={120} src={card.img} alt="" />
                </div>
                <div className="svc-title">{card.title}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
