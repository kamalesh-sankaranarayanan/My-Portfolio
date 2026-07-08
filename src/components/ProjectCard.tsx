import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

type Project = {
  title: string; badge: string; icon: any; image: string; description: string; tech: string[];
  architecture: string; features: string[]; challenges: string[]; future: string[]; github: string; demo: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <motion.article className="projectCard glass" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -8 }}>
      <div className="projectImage"><Icon size={44} /><span>{project.image}</span></div>
      <div className="projectHeader"><span>{project.badge}</span><h3>{project.title}</h3></div>
      <p>{project.description}</p>
      <div className="chips">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
      <div className="projectBlock"><strong>Architecture</strong><p>{project.architecture}</p></div>
      <div className="projectColumns">
        <div><strong>Features</strong><ul>{project.features.slice(0, 4).map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div><strong>Challenges</strong><ul>{project.challenges.slice(0, 3).map((x) => <li key={x}>{x}</li>)}</ul></div>
      </div>
      <div className="projectBlock"><strong>Future Improvements</strong><p>{project.future.join(' · ')}</p></div>
      <div className="cardActions">
        {project.github ? <a href={project.github} target="_blank" rel="noreferrer"><Code2 size={16} /> Source</a> : <span className="disabledLink">Source planned</span>}
        {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live Demo</a> : <span className="disabledLink">Demo planned</span>}
      </div>
    </motion.article>
  );
}
