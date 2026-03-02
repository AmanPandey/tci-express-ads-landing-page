import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseMBG1() {
  return (
    <section className="why1Wrap">
      <div className="container">
        <div className="why1Card">
          {/* LEFT CONTENT */}
          <motion.div
            className="why1Left"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h2
              className="why1Title"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
            Why Businesses Choose TCI Express MBG
            {/* <div class="mbgTitle mbgTitle-2">
              <h2 class="mbgTitle__h">
                Why MBG?
                <span class="mbgTitle__sub">Businesses Choose TCI Express MBG Services:</span>
              </h2>
            </div> */}
            </motion.h2>

            <motion.ul
              className="why1List"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {[
                "Committed delivery timelines for business shippers",
                "Money-back guarantee if delivery timelines aren’t met",
                "Built for enterprise and high-volume logistics needs",
                "Transparent, reliable, and accountable delivery",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  className="why1Item"
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <span className="why1Tick">✓</span>
                  <span className="why1Text">{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="why1Right"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img src="/box-blane.svg" alt="Box plane" className="why1Plane" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}