import { motion } from "framer-motion";

const CLIENT_LOGOS = [
  "/company_logo-1.png",
  "/company_logo-2.png",
  "/company_logo-3.png",
  "/company_logo-4.png",
  "/company_logo-5.png",
  "/company_logo-6.png",
];

export default function ClientLogoStrip() {
  const LOOP = [...CLIENT_LOGOS, ...CLIENT_LOGOS]; // duplicate

  return (
    <section className="cls-wrap">
      <div className="container">

        <p className="cls-kicker">Trusted by Leading Brands</p>

        <div className="cls-marquee">
          <motion.div
            className="cls-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {LOOP.map((src, i) => (
              <div className="cls-item" key={i}>
                <img src={src} className="cls-logo" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}