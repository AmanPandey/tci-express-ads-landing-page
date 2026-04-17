import React from "react";
import Motion from "./Motion";
import { color, motion } from "framer-motion";

export default function CaseStudy() {
  return (
    <section className="cs-wrap">
      <div className="container">

        {/* HEADER */}
        <Motion>
          <div className="cs-header">
            <span className="cs-tag" style={{ color: '#00FF00' }}>Case Study</span>
            <h2 className="cs-title">
              How a Leading Auto Parts Company Reduced Delays by <span style={{ color: '#00FF00' }}>32%</span>
            </h2>
          </div>
        </Motion>

        {/* MAIN */}
        <div className="cs-grid">

          {/* LEFT - STORY */}
          <Motion delay={0.05}>
            <div className="cs-left">
              <p className="cs-problem">
                A major automotive supplier was facing frequent delivery delays impacting production timelines.
              </p>

              <div className="cs-points">
                <div>Faster turnaround time</div>
                <div>Improved supply chain reliability</div>
                <div>Optimized logistics operations</div>
              </div>
            </div>
          </Motion>

          {/* RIGHT - IMPACT */}
          <motion.div
            className="cs-right"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="cs-impact">
              <div className="cs-number">32%</div>
              <div className="cs-label">Reduction in Delays</div>
            </div>
          </motion.div>

        </div>

        {/* FOOTER RESULT */}
        <Motion delay={0.1}>
            <div className="cs-result" style={{ color: '#00FF00' }}>
              Result: Increased operational efficiency and client satisfaction
            </div>
        </Motion>

      </div>
    </section>
  );
}