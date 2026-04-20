import React, { useState } from "react";
import Motion from "./Motion";
import { motion } from "framer-motion";
import FormModal from "./FormModal";

export default function Urgency() {

  const [openModal, setOpenModal] = useState(false);
  const [ctaName, setCtaName] = useState("");
  const [modalColor, setModalColor] = useState("#da3040");

  return (
    <>
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
              <button
                className="urg-btn"
                onClick={() => {
                  setCtaName("Urgency Contact");
                  setModalColor("#0e60a7"); 
                  setOpenModal(true);
                }}
              >
                Contact Us
              </button>
            </Motion>

          </motion.div>

        </div>
      </section>

      <FormModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title={ctaName}
        ctaName={ctaName}
        color={modalColor}
      />
    </>
  );
}