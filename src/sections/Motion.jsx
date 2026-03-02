import { motion } from "framer-motion";

export default function Motion({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  y = 30,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}