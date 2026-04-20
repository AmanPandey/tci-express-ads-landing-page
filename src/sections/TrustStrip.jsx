import React, { useState } from "react";
import Motion from "./Motion";
import TermsModal from "./TermsModal";

export default function TrustStrip() {

  const [openTerms, setOpenTerms] = useState(false);

  return (
    <>
      <section className="trustWrap" aria-label="Trust and compliance">
        <div className="container">
          <div className="trustStrip">

            <Motion>
              <div className="trustItem">
                <img
                  className="trustIcon"
                  src="/mbg-logo-1.svg"
                  alt="Money Back Guarantee"
                />
                <div className="trustText">
                  <div className="trustTitle">Money Back</div>
                  <div className="trustSub">Guarantee</div>
                </div>
              </div>
            </Motion>

            <div className="trustDivider" aria-hidden="true" />

            <Motion delay={0.08}>
              <div className="trustItem">
                <img
                  className="trustIcon"
                  src="/money-back-guarantee-icon.png"
                  alt=""
                />
                <div className="trustText">
                  <div className="trustTitle">Fast &amp; Secure</div>
                  <div className="trustSub">Delivery</div>
                </div>
              </div>
            </Motion>

            <div className="trustDivider" aria-hidden="true" />

            <Motion delay={0.16}>
              <div className="trustItem">
                <img
                  className="trustIcon"
                  src="/nation-wide-coverage-icon.png"
                  alt=""
                />
                <div className="trustText">
                  <div className="trustTitle">Nationwide</div>
                  <div className="trustSub">Coverage</div>
                </div>
              </div>
            </Motion>

          </div>

          {/* NOTE */}
          <div className="trustNote">
            *Money Back Guarantee applicable on select services as per company terms and conditions.
          </div>

        </div>

        {/* bottom strip */}
        <div className="trustBottom">
          <div className="container trustBottomInner">
            <div className="trustCopy">
              © {new Date().getFullYear()} TCI Express. All rights reserved.
            </div>

            <div className="trustLinks">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTerms(true);
                }}
              >
                T&amp;C Apply
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <TermsModal
        isOpen={openTerms}
        onClose={() => setOpenTerms(false)}
      />
    </>
  );
}