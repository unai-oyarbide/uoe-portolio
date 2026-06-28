import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        mixBlendMode: 'difference',
        zIndex: 100
      }}>
        <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>UOE</Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/projects" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>PROJECTS</Link>
          <Link to="/login" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>CLIENT LOGIN</Link>
        </div>
      </nav>
      
      <main>
        {children}
      </main>

      <footer style={{
        padding: '5rem 2rem',
        borderTop: '1px solid #333',
        marginTop: '10rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div style={{ maxWidth: '400px' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>UNAI OYARBIDE ERRAZQUIEN</h3>
          <p style={{ opacity: 0.6 }}>Interior Architecture & Design.</p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ textDecoration: 'underline' }}>Instagram</a>
          <a href="#" style={{ textDecoration: 'underline' }}>Email</a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
