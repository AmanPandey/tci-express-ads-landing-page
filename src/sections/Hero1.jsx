import { motion } from "framer-motion";
import { useState } from "react";
import FormModal from "./FormModal";

const HERO_STATS = [
  "On-Time Delivery",
  "60,000+ Serviceable Locations",
  "5,500+ Fleet Strength",
  // "1 Lakh+ Shipments Delivered Daily",
  // "1 Lakh+ TON Volume Handled Daily",
  "2.25 Lakh+ Clientele",
  "100% freight refund on delays",
  // "60,000+ Serviceable Locations",
  // "5,500+ Fleet Strength",
];




export default function Hero1() {
  
  const [openModal, setOpenModal] = useState(false);
  const [ctaName, setCtaName] = useState("");
  const [modalColor, setModalColor] = useState("#da3040");


  const maxTop = 5;
  const topStats = HERO_STATS.slice(0, maxTop);
  const bottomStats = HERO_STATS.slice(maxTop);

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
            CTAName: "Hero Form",
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
      }else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      alert("Unable to submit form right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="hero1">
      <div className="h1Overlay" />

      <div className="container">
        <div className="h1Grid">
          {/* LEFT */}
          <div className="h1Left">
            <motion.h1
              className="h1Title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              On-Time Delivery for Your Shipments <span>Or Money Back!</span>
            </motion.h1>

            <motion.p
              className="h1Para"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              India’s most reliable B2B express logistics network with
              industry-leading on-time delivery across 60,000+ locations.
            </motion.p>

            <motion.p
              className="h1Trust"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Trusted by leading enterprises across automotive, pharma,
              retail & e-commerce sectors.
            </motion.p>

            <motion.div
              className="h1Ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              
              
              {/* <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="h1BtnPrimary"
                type="button"
              >
                Book a Shipment Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="h1BtnSecondary"
                type="button"
              >
                Get Your Quote
              </motion.button> */}


              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="h1BtnPrimary"
                type="button"
                onClick={() => {
                  setCtaName("Book a Shipment Now");
                  setModalColor("#da3040"); // primary button color
                  setOpenModal(true);
                }}
              >
                Book a Shipment Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="h1BtnSecondary"
                type="button"
                onClick={() => {
                  setCtaName("Get Your Quote");
                  setModalColor("#1f2937"); // secondary button color (adjust if needed)
                  setOpenModal(true);
                }}
              >
                Get Your Quote
              </motion.button>


            </motion.div>
          </div>

          {/* FORM */}
          <motion.aside
            className="h1Card"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="h1CardHead">
              <h3>Get a Business Shipping Quote</h3>
            </div>

            <form className="h1Form" onSubmit={handleSubmit}>
              <motion.input
                className="h1Input"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              />

              <motion.input
                className="h1Input"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
              />

              <motion.input
                className="h1Input"
                placeholder="Business Email"
                type="email"
                value={formData.businessEmail}
                onChange={(e) => handleChange("businessEmail", e.target.value)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46 }}
              />

              <motion.input
                className="h1Input"
                placeholder="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.54 }}
              />

              <motion.select
                className="h1Select"
                value={formData.shipmentType}
                onChange={(e) => handleChange("shipmentType", e.target.value)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <option value="" style={{ color: "#9ca3af" }}>Shipment Type</option>
                <option value="Air Shipment">Air</option>
                <option value="Surface Shipment">Surface</option>
                <option value="Express Shipment">Express</option>
              </motion.select>

              <motion.button
                className="h1Btn"
                type="submit"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request a Callback"}
              </motion.button>
            </form>
          </motion.aside>
        </div>

        {/* STATS */}
        <motion.div
          className="h1StatsOuter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="h1StatsTop">
            <div className="h1StatsRow">
              {topStats.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          {bottomStats.length > 0 && (
            <div className="h1StatsBottom">
              <div className="h1StatsRow right">
                {bottomStats.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

        <FormModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title={ctaName}
          ctaName={ctaName}
          color={modalColor}
        />

    </section>
  );
}