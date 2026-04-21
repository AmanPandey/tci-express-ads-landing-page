import React, { useState } from "react";
import Motion from "./Motion";
import { motion } from "framer-motion";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    businessEmail: "",
    phone: "",
    shipmentType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.businessEmail.trim() ||
      !formData.phone.trim()
    ) {
      alert("Please fill Full Name, Business Email and Phone Number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://apis.8-insights.com/tci-express/et-ads-lead/create-lead.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: formData.name,
            CompanyName: formData.companyName,
            BusinessEmail: formData.businessEmail,
            Phone: formData.phone,
            ShipmentType: formData.shipmentType,
            CTAName: "Lead Form",
          }),
        }
      );

      const result = await response.json();

      if (result.status) {
        alert("Thank you! Your request has been received. Our team will contact you shortly.");

        setFormData({
          name: "",
          companyName: "",
          businessEmail: "",
          phone: "",
          shipmentType: "",
        });

        window.location.href = "https://tciexpress.in/mbg-express";
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      alert("Unable to submit form right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form className="lf-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />

              <input
                type="text"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
              />

              <input
                type="email"
                placeholder="Business Email"
                value={formData.businessEmail}
                onChange={(e) => handleChange("businessEmail", e.target.value)}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />

              <select
                value={formData.shipmentType}
                onChange={(e) => handleChange("shipmentType", e.target.value)}
                style={{ color: formData.shipmentType ? "#111827" : "#9ca3af" }}
              >
                <option value="">Shipment Type</option>
                <option value="Surface Shipment">Surface</option>
                <option value="Air Shipment">Air</option>
                <option value="Rail Shipment">Rail</option>
              </select>

              <button type="submit" className="lf-btn" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Get My Quote"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}