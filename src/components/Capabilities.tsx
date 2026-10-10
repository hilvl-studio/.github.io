import React from 'react';

/* СЕКЦИЯ 2: ИИ-КОМПЕТЕНЦИИ — original content and order */
const pillars = [
  {
    title: 'AI-Assisted Development & Rapid Prototyping',
    text: 'Leveraging state-of-the-art AI coding assistants, LLM-based code generation, and automated debugging workflows to independently architect websites, browser-based games, and applications. This methodology drastically compresses MVP development timelines, skipping traditional engineering bottlenecks.',
  },
  {
    title: 'Generative AI for Commercial Media Production',
    text: 'Applying cutting-edge generative image synthesis and AI video pipelines to produce and edit commercial-grade visual assets. Utilizing advanced prompt engineering techniques to guarantee consistent, brand-aligned aesthetic outputs at scale.',
  },
  {
    title: 'Local LLM Deployment & Autonomous AI Agents',
    text: 'Configuring and deploying large language models inside local, on-premise environments via CLI and terminal infrastructure. Designing and orchestrating autonomous AI agent pipelines for deep workflow automation and secure, self-hosted AI architecture management.',
  },
];

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities">
      <h2 className="section-title">Core Capabilities</h2>
      <div className="capabilities-grid">
        {pillars.map((pillar) => (
          <div className="pillar glass" key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
