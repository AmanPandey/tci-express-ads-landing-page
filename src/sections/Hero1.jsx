import { motion } from "framer-motion";

const HERO_STATS = [
  "98%+ On-Time Delivery",
  "60,000+ Serviceable Locations",
  "5,500+ Fleet Strength",
  "1 Lakh+ Shipments Delivered Daily",
  "1 Lakh+ TON Volume Handled Daily",
  "2.25 Lakh+ Clientele",
  "60,000+ Serviceable Locations",
  "5,500+ Fleet Strength",
];

export default function Hero1() {
  const maxTop = 5;
  const topStats = HERO_STATS.slice(0, maxTop);
  const bottomStats = HERO_STATS.slice(maxTop);

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
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="h1BtnPrimary"
              >
                Book a Shipment Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="h1BtnSecondary"
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

            <form className="h1Form">

              {[ "Full Name", "Company Name", "Business Email", "Phone Number" ].map((ph, i) => (
                <motion.input
                  key={ph}
                  className="h1Input"
                  placeholder={ph}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                />
              ))}

              <motion.select
                className="h1Select"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <option>Shipment Requirement</option>
              </motion.select>

              <motion.button
                className="h1Btn"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Request a Callback
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
    </section>
  );
}