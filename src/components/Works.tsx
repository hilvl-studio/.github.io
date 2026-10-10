import React from 'react';

/* СЕКЦИЯ 3: SELECTED WORKS — original content, order, and filenames (extension changed to .webp) */
const works = [
  { src: '1.webp', alt: 'Project 1', title: 'HILVL Studio Interface', category: 'UI/UX Design' },
  { src: '2.webp', alt: 'Project 2', title: 'Cafe Menu System', category: 'Frontend Dev' },
  { src: '3.webp', alt: 'Project 3', title: 'Cafe Light Theme', category: 'Component Library' },
  { src: '4.webp', alt: 'Project 4', title: 'Vortex.Art Platform', category: 'WebGL Experience' },
  { src: '5.webp', alt: 'Project 5', title: 'Bakery Section', category: 'Product Design' },
  { src: '6.webp', alt: 'Project 6', title: 'M n Dubai Casa', category: 'Mobile Menu App' },
];

const Works: React.FC = () => {
  return (
    <section id="works">
      <h2 className="section-title">Selected Works</h2>
      <div className="works-grid">
        {works.map((work) => (
          <div className="work-item" key={work.src}>
            <div className="work-img-box">
              <img src={work.src} alt={work.alt} loading="lazy" decoding="async" />
            </div>
            <div className="work-info">
              <span className="work-title">{work.title}</span>
              <span className="work-category">{work.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
