// src/sections/Hero1.jsx
import React from "react";
import Motion from "./Motion";
import { motion } from "framer-motion";

export default function Hero1() {
  return (
    <section className="hero1" aria-label="Money Back Guarantee Hero">
      <div className="h1Overlay" />

      <div className="container">
        <div className="h1Grid">
          {/* LEFT */}
          <Motion delay={0.05}>
            <div className="h1Left">
              <Motion delay={0.12}>
                <h1 className="h1Title">
                  On-Time Delivery for Your Business Shipments
                  <br />
                  <Motion delay={0.22}>
                    <span>Or Money Back!</span>
                  </Motion>
                </h1>
              </Motion>

              <Motion delay={0.32}>
                <p className="h1Para">
                  Enterprise-grade express logistics for bulk shipments across India.
                </p>
              </Motion>
            </div>
          </Motion>

          {/* RIGHT */}
          <motion.aside
            className="h1Card"
            aria-label="Get a Business Shipping Quote"
            initial={{ opacity: 0, x: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="h1CardHead">
              <h3 className="h1CardTitle">Get a Business Shipping Quote</h3>
            </div>

            <form className="h1Form" onSubmit={(e) => e.preventDefault()}>
              <Motion delay={0.22}>
                <label className="h1Field">
                  <input
                    className="h1Input"
                    type="text"
                    required
                    placeholder="Full Name"
                  />
                </label>
              </Motion>

              <Motion delay={0.26}>
                <label className="h1Field">
                  <input
                    className="h1Input"
                    type="text"
                    required
                    placeholder="Company Name"
                  />
                </label>
              </Motion>

              <Motion delay={0.3}>
                <label className="h1Field">
                  <input
                    className="h1Input"
                    type="email"
                    required
                    placeholder="Business Email"
                  />
                </label>
              </Motion>

              <Motion delay={0.34}>
                <label className="h1Field">
                  <input
                    className="h1Input"
                    type="tel"
                    required
                    placeholder="Phone Number"
                  />
                </label>
              </Motion>

              <Motion delay={0.38}>
                <label className="h1Field">
                  <select className="h1Select" required defaultValue="">
                    <option value="" disabled>
                      Shipment Requirement
                    </option>
                    <option value="air">Air</option>
                    <option value="surface">Surface</option>
                    <option value="rail">Rail</option>
                  </select>
                </label>
              </Motion>

              <Motion delay={0.45}>
                <button className="h1Btn" type="submit">
                  Request a Callback
                </button>
              </Motion>
            </form>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}