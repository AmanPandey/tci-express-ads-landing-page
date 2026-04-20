import { motion } from "framer-motion";

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="tm-overlay">
      <motion.div
        className="tm-card"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* CLOSE */}
        <button className="tm-close" onClick={onClose}>×</button>

        {/* HEADER */}
        <div className="tm-header">
          <h3>Terms & Conditions</h3>
        </div>

        {/* CONTENT */}
        <div className="tm-content">

          <p>
            Money Back Guarantee (MBG) ensures a 100% freight refund without GST if delivery is delayed beyond the scheduled date.
          </p>

          <p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              MBG claim form available in the public access at TCI Express website.
            </a>
          </p>

          <p>
            MBG is available for Surface, Rail and Air shipments, limited to selected serviceable pin codes.
          </p>

          <p><strong>Minimum freight applicable under MBG is as follows:</strong></p>
          <ul>
            <li>Surface: Rs 1,000</li>
            <li>Rail: Rs. 2,500</li>
            <li>Air: Rs. 3,000</li>
          </ul>

          <p>
            The maximum weight per package is 30 kg, and only carton boxes are accepted.
          </p>

          <p>
            Prohibited goods are not allowed, and Cut off time for MBG bookings is before 5:00 PM.
          </p>

          <p>
            Refund claims should be emailed to mbg@tciexpress.in within 7 days of delivery and will be processed to the original payment mode within the applicable timeline.
          </p>

          <p>
            Refund is not applicable for uncontrollable delays due to natural calamities, extreme weather, strikes, road blockages, political or administrative restrictions, or due to incorrect shipment details, receiver-related issues, customer-requested delays etc.
          </p>

          <p>
            <strong>Limitation of Liability-</strong> "The Company’s maximum and aggregate liability under the Money Back Guarantee, if any, shall be strictly limited to refund of the base freight charges actually paid for the concerned shipment only, and under no circumstances shall the Company be liable for any indirect, incidental, consequential, special, economic or business losses of any nature whatsoever, including loss of profit, loss of business or loss of opportunity."
          </p>

          <p>
            <strong>Jurisdiction-</strong> "All disputes shall be subject to exclusive jurisdiction of courts at Delhi"
          </p>

          <p>
            For more information on MBG bookings, reach out to us at{" "}
            <a href="mailto:mbg@tciexpress.in">mbg@tciexpress.in</a>{" "}
            or toll-free no. 1800-2000-977.
          </p>

        </div>
      </motion.div>
    </div>
  );
}