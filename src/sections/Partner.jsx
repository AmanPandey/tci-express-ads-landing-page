import React from "react";
import Motion from "./Motion";
import { motion } from "framer-motion";

export default function Partner() {
  return (
    <section className="pr-partner">
      <div className="pr-overlay"></div>

      <div className="container pr-inner">

        {/* HEADER */}
        <div className="pr-header">
          <h2 className="pr-title">
            HOW MONEY BACK GUARANTEE WORKS
          </h2>
          <p className="pr-sub">
            Simple. Transparent. Reliable.
          </p>
        </div>

        {/* STEPS */}
        <div className="pr-content">

          <Motion>
            <div className="pr-step">
              <div className="pr-icon">01</div>
              <div className="pr-text">
                Book your shipment with us
              </div>
            </div>
          </Motion>

          <Motion delay={0.1}>
            <div className="pr-step">
              <div className="pr-icon">02</div>
              <div className="pr-text">
                Get a committed delivery timeline
              </div>
            </div>
          </Motion>

          <Motion delay={0.2}>
            <div className="pr-step">
              <div className="pr-icon">03</div>
              <div className="pr-text">
                If delayed, claim your money back*
              </div>
            </div>
          </Motion>

        </div>

        {/* FOOTER */}
        <div className="pr-footer">
          <p className="pr-note">
            *As per standard terms &amp; conditions
          </p>

          <div className="pr-trust">
            <span className="pr-tick">✔</span>
            <span>No hidden clauses. No complicated process.</span>
          </div>
        </div>

        {/* LOGOS */}
        <motion.div
          className="pr-logos"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/company_logo-1.png" alt="" />
          <img src="/company_logo-2.png" alt="" />
          <img src="/company_logo-3.png" alt="" />
          <img src="/company_logo-4.png" alt="" />
          <img src="/company_logo-5.png" alt="" />
          <img src="/company_logo-6.png" alt="" />
        </motion.div>

      </div>
    </section>
  );
}