import { motion } from 'framer-motion';

export function SkillCard({ group, items }: { group: string; items: string[] }) {
  return (
    <motion.div className="skillCard glass" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -6 }}>
      <h3>{group}</h3>
      <div className="chips">{items.map((item) => <span key={item}>{item}</span>)}</div>
    </motion.div>
  );
}
