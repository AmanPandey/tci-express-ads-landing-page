import React from "react";
import Motion from "./Motion";
import { motion } from "framer-motion";

export default function WhoIsThisFor() {
  return (
    <section className="who-wrap">
      <div className="container">

        <div className="who-grid">

          {/* LEFT */}
          <div className="who-left">

            <Motion>
              <h2 className="who-title">
                Who is this for
              </h2>
            </Motion>

            <Motion delay={0.05}>
              <p className="who-sub">
                Built for growing businesses and enterprises that rely on speed and reliability.
              </p>
            </Motion>

            <Motion delay={0.1}>
              <p className="who-highlight">
                If your business depends on <strong>timely delivery</strong>, this is built for you.
              </p>
            </Motion>

          </div>

          {/* RIGHT */}
          <div className="who-right">

            <Motion delay={0.05}>
              <div className="who-card">Manufacturers & SMEs</div>
            </Motion>

            <Motion delay={0.1}>
              <div className="who-card">E-commerce Sellers & Brands</div>
            </Motion>

            <Motion delay={0.15}>
              <div className="who-card">Pharma & Healthcare Companies</div>
            </Motion>

            <Motion delay={0.2}>
              <div className="who-card">Automotive & Industrial Suppliers</div>
            </Motion>

            <Motion delay={0.25}>
              <div className="who-card">Textile Industry</div>
            </Motion>

          </div>

        </div>

        {/* OPTIONAL subtle bottom animation (like partner logos feel) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

      </div>
    </section>
  );
}