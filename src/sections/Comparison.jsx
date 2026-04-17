import React from "react";
import Motion from "./Motion";
import { motion } from "framer-motion";

export default function Comparison() {
  return (
    <section className="cmp-wrap">
      <div className="container">

        {/* HEADER */}
        <Motion>
          <div className="cmp-header">
            <h2 className="cmp-title">Why TCI Express Stands Out</h2>
          </div>
        </Motion>

        {/* TABLE */}
        <div className="cmp-table">

          {/* HEAD */}
          <div className="cmp-row cmp-head">
            <div>Feature</div>
            <div className="cmp-highlight">TCI Express</div>
            <div>Others</div>
          </div>

          {/* ROWS */}
          <Motion delay={0.05}>
            <div className="cmp-row">
              <div>Guaranteed Delivery</div>
              <div className="cmp-highlight">✔</div>
              <div className="cmp-muted">✖</div>
            </div>
          </Motion>

          <Motion delay={0.1}>
            <div className="cmp-row">
              <div>100% freight refund on delays</div>
              <div className="cmp-highlight">✔</div>
              <div className="cmp-muted">✖</div>
            </div>
          </Motion>

          <Motion delay={0.15}>
            <div className="cmp-row">
              <div>Pan-India coverage</div>
              <div className="cmp-highlight">60,000+ locations</div>
              <div className="cmp-muted">Limited</div>
            </div>
          </Motion>

          <Motion delay={0.2}>
            <div className="cmp-row">
              <div>B2B Specialization</div>
              <div className="cmp-highlight">✔</div>
              <div className="cmp-muted">✖</div>
            </div>
          </Motion>

          <Motion delay={0.25}>
            <div className="cmp-row">
              <div>Seamless booking & claim process</div>
              <div className="cmp-highlight">✔</div>
              <div className="cmp-muted">✖</div>
            </div>
          </Motion>

        </div>

      </div>
    </section>
  );
}