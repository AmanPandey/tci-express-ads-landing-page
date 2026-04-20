import { motion } from "framer-motion";
import { useState } from "react";

export default function FormModal({ isOpen, onClose, title, ctaName, color }) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    businessEmail: "",
    phone: "",
    shipmentType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Name: formData.name,
            CompanyName: formData.companyName,
            BusinessEmail: formData.businessEmail,
            Phone: formData.phone,
            ShipmentType: formData.shipmentType,
            CTAName: ctaName || "Popup Form",
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
    } catch (err) {
      alert("Unable to submit form right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fm-overlay">
      <motion.div
        className="fm-card h1Card"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* CLOSE BUTTON */}
        <button className="fm-close" onClick={onClose}>
          ×
        </button>

        {/* HEADER */}
        <div
          className="h1CardHead"
          style={{ background: color || "#0e60a7" }}
        >
          <h3>{title || "Get a Business Shipping Quote"}</h3>
        </div>

        <form className="h1Form" onSubmit={handleSubmit}>
          <input
            className="h1Input"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <input
            className="h1Input"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
          />

          <input
            className="h1Input"
            placeholder="Business Email"
            type="email"
            value={formData.businessEmail}
            onChange={(e) => handleChange("businessEmail", e.target.value)}
          />

          <input
            className="h1Input"
            placeholder="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          <select
            className="h1Select"
            value={formData.shipmentType}
            onChange={(e) => handleChange("shipmentType", e.target.value)}
            style={{ color: formData.shipmentType ? "#111827" : "#9ca3af" }}
          >
            <option value="">Shipment Type</option>
            <option value="Air Shipment">Air</option>
            <option value="Surface Shipment">Surface</option>
            <option value="Express Shipment">Express</option>
          </select>

          {/* SUBMIT BUTTON */}
          <button
            className="h1Btn"
            type="submit"
            disabled={isSubmitting}
            style={{ background: color || "#da3040" }}
          >
            {isSubmitting ? "Submitting..." : "Request a Callback"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}