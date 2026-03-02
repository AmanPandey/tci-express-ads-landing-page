import React from "react";
import Motion from "./Motion";

export default function CTAstrip() {
  return (
    <section className="ctaStripWrap" aria-label="Ready to ship CTA">
      {/* background */}
      <div className="ctaStripBg" aria-hidden="true" />
      <div className="ctaStripOverlay" aria-hidden="true" />

      <div className="container">
        <Motion>
          <div className="ctaStripCard">
            <Motion delay={0.08}>
              <h2 className="ctaStripTitle">Ready to Ship with Confidence?</h2>
            </Motion>

            <Motion delay={0.14}>
              <p className="ctaStripSub">
                Speak to our logistics experts and plan your business shipments
                with assured delivery timelines.
              </p>
            </Motion>

            <Motion delay={0.2}>
              <div className="ctaStripCtas">
                <a className="ctaStripBtn ctaStripBtnRed" href="#quote">
                  Get a Business Shipping Quote
                </a>

                <a className="ctaStripBtn ctaStripBtnBlue" href="#contact">
                  Speak to Our Logistics Experts
                </a>
              </div>
            </Motion>

            {/* <a className="ctaStripReviews" href="#reviews">
              ★ View Enterprise Client Reviews
            </a> */}
          </div>
        </Motion>
      </div>
    </section>
  );
}