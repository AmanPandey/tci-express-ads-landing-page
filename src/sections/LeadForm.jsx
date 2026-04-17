import React from "react";
import Motion from "./Motion";
import { motion } from "framer-motion";

export default function LeadForm() {
  return (
    <section className="lf-wrap">
      <div className="container">

        <div className="lf-grid">

          {/* LEFT CONTENT */}
          <div className="lf-left">

            <Motion>
              <h2 className="lf-title">
                Get Instant Rates & Delivery Commitment
              </h2>
            </Motion>

            <Motion delay={0.05}>
              <p className="lf-sub">
                Fill in your details and our team will connect with you for a tailored logistics solution.
              </p>
            </Motion>

            <Motion delay={0.1}>
              <ul className="lf-points">
                <li>Fast response within minutes</li>
                <li>Customized pricing for your business</li>
                <li>Dedicated account support</li>
              </ul>
            </Motion>

          </div>

          {/* RIGHT FORM */}
          <motion.div
            className="lf-formCard"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <form className="lf-form">

              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Company Name" />
              <input type="tel" placeholder="Phone Number" />
              
              <select>
                <option>Shipment Type</option>
                <option>Air</option>
                <option>Surface</option>
                <option>Express</option>
              </select>

              <button type="submit" className="lf-btn">
                Get My Quote
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}