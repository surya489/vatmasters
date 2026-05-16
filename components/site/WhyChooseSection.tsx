import { vatmastersAsset } from "@/lib/vatmastersOrigin";

const topBar = vatmastersAsset("/assets/Frame%201000006032_compressed-CwALG3m2.webp");
const ag = "/extracted-site/ag.webp";

function ChoiceCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="wcu-cardWrap mt-3">
      <div className="wcu-accent" aria-hidden />
      <div className="wcu-card">
        <div className="wcu-glass" aria-hidden>
          <div className="wcu-glassArc" />
        </div>
        <div className="wcu-content">
          <div className="wcu-icon">{icon}</div>
          <p className="wcu-title">{title}</p>
          <p className="wcu-desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="bg-white" id="why-choose">
      <div className="wcu-shell mx-auto">
        <div className="wcu-header position-relative mx-auto !max-w-full !w-full">
          <div className="pc-headerWrap  d-lg-block">
          <img src={ag} alt="" className="pc-headerImg" draggable={false} />
          <p className="pc-headerText">
            <span className="pc-headerSpan">
            Why Choose Us <br />
              <span className="primarss">VAT Masters</span>
            </span>
          </p>
        </div>
        </div>
        <div className="row g-0 g-sm-4 g-lg-0">
          <div className="col-12 col-sm-6 col-lg-4">
            <ChoiceCard
              icon="🏛️"
              title="Trusted Expertise"
              desc="Backed by experience, VAT Masters is a leader in accounting and VAT consultancy, known for ethical standards."
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <ChoiceCard
              icon="👔"
              title="Skilled & Certified Team"
              desc="Our auditors and consultants are carefully selected, extensively trained, and consistently motivated to deliver services that meet global standards."
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <ChoiceCard
              icon="🤝"
              title="Client-Centric Approach"
              desc="We prioritize delivering exceptional value by offering personalized, accurate, and timely financial and tax solutions for every client."
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <ChoiceCard
              icon="🌍"
              title="Global Standards"
              desc="Our team combines local market understanding with best practices, ensuring compliance and excellence for every client."
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <ChoiceCard
              icon="✅"
              title="Integrity"
              desc="Every service we offer reflects our dedication to precision, transparency, and long-term client success without compromise."
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <ChoiceCard
              icon="🧾"
              title="VAT Registration"
              desc="From VAT registration to financial audits, we offer a complete range of services to meet your business compliance needs."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
