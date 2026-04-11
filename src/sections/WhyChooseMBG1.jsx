import React from "react";
import { motion } from "framer-motion";

const WHY_POINTS = [
  {
    title: "Fastest Time-Definite Delivery",
    desc: "We don’t just promise speed, we commit to delivery timelines.",
  },
  {
    title: "Money Back Guarantee",
    desc: "If we miss the committed timeline, you get your money back.*",
  },
  {
    title: "Unmatched Network Coverage",
    desc: "Serving 60,000+ locations across India with precision.",
  },
  {
    title: "Specialized B2B Logistics",
    desc: "Designed for high-value, time-sensitive shipments.",
  },
];

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
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h2
              className="why1Title"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            >
              WHAT MAKES US DIFFERENT
            </motion.h2>

            <motion.p
              className="why1SubTitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
            >
              Why Businesses Choose TCI Express
            </motion.p>

            <motion.ul
              className="why1List"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.14 },
                },
              }}
            >
              {WHY_POINTS.map((item, i) => (
                <motion.li
                  key={i}
                  className="why1Item"
                  variants={{
                    hidden: { opacity: 0, x: -36 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <span className="why1Tick">✓</span>

                  <div className="why1Content">
                    <strong className="why1ItemTitle">{item.title}</strong>
                    <p className="why1ItemDesc">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="why1Right"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
          >
            <div className="why1ImageWrap">
              <img
                src="/box-blane.svg"
                alt="Box plane"
                className="why1Plane"
              />
              <img
                src="/mbg-logo-1.svg"
                alt="MBG Guarantee"
                className="why1Badge"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}