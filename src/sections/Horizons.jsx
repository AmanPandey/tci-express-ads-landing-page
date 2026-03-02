import React from "react";
import Motion from "./Motion";

const HORIZONS = [
  "/c2c-logo.png",
  "/domestic-logo.png",
  "/international-logo.png",
  "/rail-logo.png",
  "/surface-logo.png",
  "/e-commerce-logo.png",
  "/singapore-logo.png",
  "/foundation-logo.png",
  "/reality-logo.png",
];

export default function Horizons() {
  return (
    <section className="horizonsWrap" aria-label="Multiple Express Solutions">
      <div className="container">
        <Motion delay={0.05}>
          {/* <h2 className="horizonsTitle">One Partner. Multiple Express Solutions.</h2> */}

          <div class="mbgTitle mbgTitle-2 mbgTitle-2--center">
            <h2 class="mbgTitle__h">
              One Partner
              <span class="mbgTitle__sub"> Multiple Express Solutions.</span>
            </h2>
          </div>

        </Motion>

        <div className="horizonsGrid">
          {HORIZONS.map((src, i) => (
            <Motion key={src} delay={0.1 + i * 0.06}>
              <div className="horizonsCard">
                <img src={src} alt="" loading="lazy" className="horizonsLogo" />
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}