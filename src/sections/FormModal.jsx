import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FormModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const btn = document.getElementById("openModalBtn");
    if (btn) {
      btn.onclick = () => setOpen(true);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fm-overlay">
      <motion.div
        className="fm-modal"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="fm-header">
          <h3>Get a Business Shipping Quote</h3>
          <button className="fm-close" onClick={() => setOpen(false)}>×</button>
        </div>

        <form className="fm-form">
          <input placeholder="Full Name" />
          <input placeholder="Company Name" />
          <input placeholder="Business Email" />
          <input placeholder="Phone Number" />

          <select>
            <option>Shipment Requirement</option>
          </select>

          <button className="fm-btn">Request a Callback</button>
        </form>
      </motion.div>
    </div>
  );
}