import React, { useRef } from "react";
import Motion from "./Motion";

const HORIZONS = [
  "/hrz1.jpeg",
  "/hrz2.jpeg",
  "/hrz3.jpeg",
  "/hrz4.jpeg",
  "/hrz5.jpeg",
  "/hrz6.jpeg",
  // "/domestic-logo.png",
  // "/international-logo.png",
  // "/rail-logo.png",
  // "/surface-logo.png",
  // "/e-commerce-logo.png",
  // "/singapore-logo.png",
  // "/foundation-logo.png",
  // "/reality-logo.png",
];

export default function Horizons() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="hrz-wrap" aria-label="Multiple Express Solutions">
      <div className="container">

        <Motion delay={0.05}>
          <div className="mbgTitle mbgTitle-2 mbgTitle-2--center">
            <h2 className="">
              One Partner  
              <span className="mbgTitle__sub"> Multiple Express Solutions.</span>
            </h2>
          </div>
        </Motion>

        <div className="hrz-sliderWrap">

          <button className="hrz-arrow hrz-arrow--left" onClick={() => scroll("left")}>
            ‹
          </button>

          <div className="hrz-slider" ref={scrollRef}>
            {HORIZONS.map((src, i) => (
              <div className="hrz-card" key={src}>
                <Motion delay={0.1 + i * 0.06}>
                  <img src={src} alt="" loading="lazy" className="hrz-logo" />
                </Motion>
              </div>
            ))}
          </div>

          <button className="hrz-arrow hrz-arrow--right" onClick={() => scroll("right")}>
            ›
          </button>

        </div>
      </div>
    </section>
  );
}