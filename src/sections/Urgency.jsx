import React from "react";
import Motion from "./Motion";
import { motion } from "framer-motion";

export default function Urgency() {
  return (
    <section className="urg-wrap">
      <div className="container">

        <motion.div
          className="urg-box"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >

          {/* TITLE */}
          <Motion>
            <h2 className="urg-title">
              Limited{" "}
              <span className="urg-highlight">Onboarding Slots</span>{" "}
              This Month
            </h2>
          </Motion>

          {/* SUBTEXT */}
          <Motion delay={0.05}>
            <p className="urg-sub">
              We are currently prioritizing new business accounts for express onboarding.
            </p>
          </Motion>

          {/* BENEFIT */}
          <Motion delay={0.1}>
            <div className="urg-benefit">
              ✔ Get priority access & customized pricing today
            </div>
          </Motion>

          {/* CTA */}
          <Motion delay={0.15}>
            <button className="urg-btn">
              Request Priority Access
            </button>
          </Motion>

        </motion.div>

      </div>
    </section>
  );
}