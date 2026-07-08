import { motion } from 'framer-motion';

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div className="sectionTitle" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <p>{kicker}</p>
      <h2>{title}</h2>
    </motion.div>
  );
}
