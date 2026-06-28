import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const container = useRef(null);

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
        
        {/* Project 1 */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ width: '60%', height: '80vh', overflow: 'hidden' }}>
            <img className="img-parallax" src="/brutalist_interior_1.png" alt="Project 1" style={{ width: '100%', height: '120%', objectFit: 'cover', marginTop: '-10%' }} />
          </div>
          <div className="reveal-text" style={{ width: '40%' }}>
            <h3 style={{ fontSize: '3rem' }}>01 / THE CONCRETE HOUSE</h3>
            <p style={{ marginTop: '1rem', fontSize: '1.1rem', opacity: 0.7 }}>A stark exploration of light and shadow.</p>
          </div>
        </div>

        {/* Project 2 */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexDirection: 'row-reverse' }}>
          <div style={{ width: '50%', height: '70vh', overflow: 'hidden' }}>
            <img className="img-parallax" src="/elegant_interior_2.png" alt="Project 2" style={{ width: '100%', height: '120%', objectFit: 'cover', marginTop: '-10%' }} />
          </div>
          <div className="reveal-text" style={{ width: '50%', textAlign: 'right' }}>
            <h3 style={{ fontSize: '3rem' }}>02 / MONOLITHIC RESIDENCE</h3>
            <p style={{ marginTop: '1rem', fontSize: '1.1rem', opacity: 0.7 }}>Monumental scale meets elegant design.</p>
          </div>
        </div>

        {/* Project 3 */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          <div className="reveal-text" style={{ width: '30%', paddingTop: '10rem' }}>
            <h3 style={{ fontSize: '3rem' }}>03 / GLASS PAVILION</h3>
            <p style={{ marginTop: '1rem', fontSize: '1.1rem', opacity: 0.7 }}>Groundbreaking modernism in nature.</p>
          </div>
          <div style={{ width: '70%', height: '90vh', overflow: 'hidden' }}>
            <img className="img-parallax" src="/minimalist_interior_3.png" alt="Project 3" style={{ width: '100%', height: '120%', objectFit: 'cover', marginTop: '-10%' }} />
          </div>
        </div>

      </section>
    </div>
  );
};

export default Home;
