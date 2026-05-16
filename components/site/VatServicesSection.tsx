import { vatmastersAsset } from "@/lib/vatmastersOrigin";

const ICONS = {
  wm: "/extracted-site/wm.webp",
  Sm: vatmastersAsset("/assets/vtregi_compressed-BiRAIog_.webp?w=48&imagetools"),
  km: vatmastersAsset("/assets/vtdi_compressed-BvI2r_s8.webp?w=48&imagetools"),
  Cm: vatmastersAsset("/assets/vtconi_compressed-0D_WxSYA.webp?w=48&imagetools"),
  Em: "/extracted-icons/Em.webp",
  Bm: "/extracted-icons/Bm.webp",
};

export default function VatServicesSection() {
  return (
    <section className="vat-section" id="services">
      <h1 className="dsdsae">
        We Offer TAX Services For <span className="primarss">Business Across UAE</span>
      </h1>
      <div className="container cancontainer">
        <div className="canvas">
          <div className="arm a1">
            <div className="bar" />
            <div className="badge">
              <img loading="lazy" decoding="async" width={80} height={80} src={ICONS.wm} alt="" className="icone1" />
            </div>
          </div>
          <div className="arm a2">
            <div className="bar" />
            <div className="badge">
              <img loading="lazy" decoding="async" width={80} height={80} src={ICONS.Sm} alt="" className="icone2" />
            </div>
          </div>
          <div className="arm a3">
            <div className="bar" />
            <div className="badge">
              <img loading="lazy" decoding="async" width={80} height={80} src={ICONS.km} alt="" className="icone3" />
            </div>
          </div>
          <div className="arm a4">
            <div className="bar" />
            <div className="badge">
              <img loading="lazy" decoding="async" width={80} height={80} src={ICONS.Cm} alt="" className="icone4" />
            </div>
          </div>
          <div className="arm a5">
            <div className="bar" />
            <div className="badge">
              <img loading="lazy" decoding="async" width={80} height={80} src={ICONS.Em} alt="" className="icone5" />
            </div>
          </div>
          <div className="arm a6">
            <div className="bar" />
            <div className="badge">
              <img loading="lazy" decoding="async" src={ICONS.Bm} alt="" className="icone6" />
            </div>
          </div>
          <div className="hub">
            <p>
              TAX
              <br />
              SERVICES
            </p>
          </div>

          <div className="tblock t1">
            <h2>VAT Registration</h2>
            <span>
              VAT registration in the UAE means a business is officially recognized under the VAT Act. It allows the
              company to charge VAT on goods and remit to government.
            </span>
          </div>
          <div className="tblock t2">
            <h2>Corporate Tax</h2>
            <span>
              Expert corporate tax registration, computation, and filing services for UAE businesses. We ensure accurate
              reporting and full compliance with UAE corporate tax laws.
            </span>
          </div>
          <div className="tblock t3">
            <p>VAT Return Filing</p>
            <span>
              A VAT return is an official document submitted by a taxable person to the Federal Tax Authority (FTA),
              reporting payable and recoverable VAT for a specific tax period.
            </span>
          </div>
          <div className="tblock t4">
            <p>Accounting &amp; Bookkeeping</p>
            <span>
              Strong accounting and financial systems form the foundation of every business. They act as a lifeline that
              supports stability and long-term growth.
            </span>
          </div>
          <div className="tblock t5">
            <p>VAT &amp; TAX Consultancy</p>
            <span>
              Running a business involves risk, and tax filing is one of the most challenging tasks. Without proper
              expertise, the process becomes even more complex.
            </span>
          </div>
          <div className="tblock t6">
            <p>VAT-De Registration</p>
            <span>
              VAT deregistration allows a taxable person to cancel their VAT registration. The VAT number is permanently
              invalidated after approval by the FTA.
            </span>
          </div>

          <div className="mobile-cards">
            <div className="mobile-head">
              <div className="tag">VAT SERVICES</div>
            </div>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="stripe" />
                  <div className="p-3 d-lg-flex gap-3 align-items-start">
                    <div className="pill">
                      <img loading="lazy" decoding="async" src={ICONS.wm} alt="" className="w-50" />
                    </div>
                    <div>
                      <h2>VAT Registration </h2>
                      <span>
                        VAT registration in the UAE means a business is officially recognized under the VAT Act. It allows
                        the company to charge VAT on goods and remit to government.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="stripe" />
                  <div className="p-3 d-lg-flex gap-3 align-items-start">
                    <div className="pill">
                      <img loading="lazy" decoding="async" src={ICONS.Sm} alt="" className="w-50" />
                    </div>
                    <div>
                      <h2>Corporate Tax</h2>
                      <span>
                        Expert corporate tax registration, computation, and filing services for UAE businesses. We ensure
                        accurate reporting and full compliance with UAE corporate tax laws.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="stripe" />
                  <div className="p-3 d-lg-flex gap-3 align-items-start">
                    <div className="pill">
                      <img loading="lazy" decoding="async" src={ICONS.km} alt="" className="w-50" />
                    </div>
                    <div>
                      <p>VAT Return Filing</p>
                      <span>
                        A VAT return is an official document submitted by a taxable person to the Federal Tax Authority
                        (FTA), reporting payable and recoverable VAT for a specific tax period.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="stripe" />
                  <div className="p-3 d-lg-flex gap-3 align-items-start">
                    <div className="pill">
                      <img loading="lazy" decoding="async" src={ICONS.Cm} alt="" className="w-50" />
                    </div>
                    <div>
                      <p>Accounting &amp; Bookkeeping</p>
                      <span>
                        Strong accounting and financial systems form the foundation of every business. They act as a
                        lifeline that supports stability and long-term growth.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="stripe" />
                  <div className="p-3 d-lg-flex gap-3 align-items-start">
                    <div className="pill">
                      <img loading="lazy" decoding="async" src={ICONS.Em} alt="" className="w-50" />
                    </div>
                    <div>
                      <p>VAT &amp; TAX Consultancy</p>
                      <span>
                        Running a business involves risk, and tax filing is one of the most challenging tasks. Without
                        proper expertise, the process becomes even more complex.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="stripe" />
                  <div className="p-3 d-lg-flex gap-3 align-items-start">
                    <div className="pill">
                      <img loading="lazy" decoding="async" src={ICONS.Bm} alt="" className="w-50" />
                    </div>
                    <div>
                      <p>VAT-De Registration</p>
                      <span>
                        VAT deregistration allows a taxable person to cancel their VAT registration. The VAT number is
                        permanently invalidated after approval by the FTA.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
