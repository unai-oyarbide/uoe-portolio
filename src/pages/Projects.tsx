import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.project-item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} style={{ minHeight: '100vh', padding: '10rem 2rem 5rem 2rem' }}>
      <h1 className="text-huge" style={{ marginBottom: '4rem' }}>ALL PROJECTS</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {projects.map((proj) => (
          <div key={proj.id} className="project-item" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ width: '100%', height: '400px', overflow: 'hidden', backgroundColor: '#111' }}>
              <img 
                src={proj.image} 
                alt={proj.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%) contrast(120%)' }} 
              />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{proj.title}</h2>
              <p style={{ opacity: 0.6, fontSize: '0.9rem', marginTop: '0.5rem', fontFamily: 'monospace' }}>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
