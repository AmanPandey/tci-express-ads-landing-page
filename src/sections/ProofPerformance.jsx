import React from "react";
import Motion from "./Motion";
import { motion } from "framer-motion";

export default function ProofPerformance() {
  return (
    <section className="pp-wrap">
      <div className="container">

        {/* HEADER */}
        <div className="pp-header">
          <Motion>
            <h2 className="pp-title">Proof & Performance</h2>
          </Motion>

          <Motion delay={0.05}>
            <p className="pp-sub">Delivering reliability at scale</p>
          </Motion>
        </div>

        {/* METRICS GRID */}
        <div className="pp-grid">

          <Motion>
            <div className="pp-box">
              <div className="pp-value">29000+</div>
              <div className="pp-label">PIN Codes</div>
            </div>
          </Motion>

          <Motion delay={0.1}>
            <div className="pp-box">
              <div className="pp-value">2.25 lakh+</div>
              <div className="pp-label">Clients Served</div>
            </div>
          </Motion>

          <Motion delay={0.2}>
            <div className="pp-box">
              <div className="pp-value">60K+</div>
              <div className="pp-label">Serviceable Locations</div>
            </div>
          </Motion>

          <Motion delay={0.3}>
            <div className="pp-box">
              <div className="pp-value">40%</div>
              <div className="pp-label">Efficiency Boost</div>
            </div>
          </Motion>

        </div>

      </div>
    </section>
  );
}