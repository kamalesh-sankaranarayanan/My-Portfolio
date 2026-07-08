import { motion } from 'framer-motion';

export function Timeline({ items }: { items: { title: string; company: string; period: string; summary: string; highlights: string[] }[] }) {
  return <div className="timeline">{items.map((item) => (
    <motion.article className="timelineItem glass" key={item.title} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      <div className="timelineDot" />
      <p className="eyebrow">{item.period}</p>
      <h3>{item.title}</h3>
      <strong>{item.company}</strong>
      <p>{item.summary}</p>
      <ul>{item.highlights.map((point) => <li key={point}>{point}</li>)}</ul>
    </motion.article>
  ))}</div>;
}
