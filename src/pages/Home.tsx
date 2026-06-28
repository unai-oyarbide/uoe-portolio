import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const container = useRef(null);
  const featuredProjects = projects.slice(0, 4);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Fade in hero text
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
      });

      // Parallax images
      gsap.utils.toArray('.img-parallax').forEach((img: any) => {
        gsap.to(img, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      // Reveal text blocks
      gsap.utils.toArray('.reveal-text').forEach((text: any) => {
        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
            start: 'top 80%',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} style={{ width: '100%' }}>
      {/* Hero Section */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
        <h1 className="hero-text text-huge" style={{ margin: 0, marginTop: 'auto' }}>UNAI</h1>
        <h1 className="hero-text text-huge" style={{ margin: 0 }}>OYARBIDE</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto' }}>
          <p className="hero-text" style={{ fontSize: '1.2rem', maxWidth: '300px' }}>ARCHITECTURAL INTERIOR DESIGN</p>
          <img className="hero-text" src="/logo-uoe.png" alt="UOE Logo" style={{ width: '100px', filter: 'invert(1)' }} />
        </div>
      </section>

      {/* Manifesto */}
      <section style={{ padding: '10rem 2rem', display: 'flex', justifyContent: 'flex-end' }}>
        <h2 className="reveal-text" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', maxWidth: '60%', textAlign: 'right', lineHeight: '1.2' }}>
          REDEFINING SPACE THROUGH EXTREME MINIMALISM AND BRUTALIST AESTHETICS. WE CRAFT MONUMENTAL EXPERIENCES.
        </h2>
      </section>

      {/* Project Gallery */}
      <section style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '10rem' }}>
        
        {featuredProjects.map((proj, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={proj.id} style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexDirection: isEven ? 'row' : 'row-reverse' }}>
              <div style={{ width: isEven ? '60%' : '50%', height: isEven ? '80vh' : '70vh', overflow: 'hidden', backgroundColor: '#111' }}>
                <img className="img-parallax" src={proj.image} alt={proj.title} style={{ width: '100%', height: '120%', objectFit: 'cover', marginTop: '-10%', filter: 'grayscale(15%)' }} />
              </div>
              <div className="reveal-text" style={{ width: isEven ? '40%' : '50%', textAlign: isEven ? 'left' : 'right' }}>
                <h3 style={{ fontSize: '3rem' }}>0{index + 1} / {proj.title}</h3>
                <p style={{ marginTop: '1rem', fontSize: '1.1rem', opacity: 0.7, fontFamily: 'monospace' }}>{proj.description}</p>
              </div>
            </div>
          );
        })}

        <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem 0' }}>
           <Link to="/projects" className="reveal-text uppercase" style={{ fontSize: '2rem', textDecoration: 'underline' }}>
             VIEW ALL 18 PROJECTS →
           </Link>
        </div>

      </section>
    </div>
  );
};

export default Home;
