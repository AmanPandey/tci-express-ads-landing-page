import React from "react";
import Motion from "./Motion";
import { motion } from "framer-motion";

export default function Partner() {
  return (
    <section className="partner">
      <div className="overlay"></div>

      <div className="container inner">
        {/* POINTS */}
        <div className="points">
          <Motion>
            <div className="point">
              <span className="tick">✓</span>
              <div className="text">
                <strong>Serving 2,000+</strong> Businesses every day across India
              </div>
            </div>
            <hr className="divider" />
          </Motion>

          <Motion delay={0.1}>
            <div className="point">
              <span className="tick">✓</span>
              <div className="text">
                Preferred logistics partner for enterprise & commercial operations
              </div>
            </div>
            <hr className="divider" />
          </Motion>

          <Motion delay={0.2}>
            <div className="point">
              <span className="tick">✓</span>
              <div className="text">
                Backed by a strong pan-India express delivery network
              </div>
            </div>
          </Motion>
        </div>

        {/* LOGOS */}
        <motion.div
          className="logos"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
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