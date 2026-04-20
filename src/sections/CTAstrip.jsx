import React, { useState } from "react";
import Motion from "./Motion";
import FormModal from "./FormModal";

export default function CTAstrip() {

  const [openModal, setOpenModal] = useState(false);
  const [ctaName, setCtaName] = useState("");
  const [modalColor, setModalColor] = useState("#da3040");

  return (
    <>
      <section className="ctaStripWrap" aria-label="Ready to ship CTA">
        {/* background */}
        <div className="ctaStripBg" aria-hidden="true" />
        <div className="ctaStripOverlay" aria-hidden="true" />

        <div className="container">
          <Motion>
            <div className="ctaStripCard">

              <Motion delay={0.08}>
                <h2 className="ctaStripTitle">
                  Ready to Ship with Confidence?
                </h2>
              </Motion>

              <Motion delay={0.14}>
                <p className="ctaStripSub">
                  Speak to our logistics experts and plan your business shipments
                  with assured delivery timelines.
                </p>
              </Motion>

              <Motion delay={0.2}>
                <div className="ctaStripCtas">

                  {/* CTA 1 */}
                  <button
                    className="ctaStripBtn ctaStripBtnRed"
                    onClick={() => {
                      setCtaName("Get a Business Shipping Quote");
                      setModalColor("#da3040"); // red
                      setOpenModal(true);
                    }}
                  >
                    Get a Business Shipping Quote
                  </button>

                  {/* CTA 2 */}
                  <button
                    className="ctaStripBtn ctaStripBtnBlue"
                    onClick={() => {
                      setCtaName("Speak to Our Logistics Experts");
                      setModalColor("#0e60a7"); // blue
                      setOpenModal(true);
                    }}
                  >
                    Speak to Our Logistics Experts
                  </button>

                </div>
              </Motion>

            </div>
          </Motion>
        </div>
      </section>

      <FormModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title={ctaName}
        ctaName={ctaName}
        color={modalColor}
      />
    </>
  );
}