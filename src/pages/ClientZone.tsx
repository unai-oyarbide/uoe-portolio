import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ClientZone = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem('uoe_auth');
    if (isAuth !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('uoe_auth');
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '10rem 2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
        <h1 className="text-huge" style={{ margin: 0 }}>DASHBOARD</h1>
        <button 
          onClick={handleLogout}
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid #fff',
            padding: '0.5rem 2rem',
            cursor: 'pointer',
            fontFamily: 'monospace'
          }}
        >
          LOGOUT
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Placeholder cards for future content */}
        <div style={{ border: '1px solid #333', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'monospace', opacity: 0.8 }}>01 / PROJECT FILES</h2>
          <p style={{ opacity: 0.5 }}>Access your floor plans, renders, and technical documentation.</p>
          <button style={{ alignSelf: 'flex-start', background: '#333', color: '#fff', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }}>COMING SOON</button>
        </div>
        
        <div style={{ border: '1px solid #333', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'monospace', opacity: 0.8 }}>02 / BUDGETS</h2>
          <p style={{ opacity: 0.5 }}>Review cost estimates and billing information.</p>
          <button style={{ alignSelf: 'flex-start', background: '#333', color: '#fff', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }}>COMING SOON</button>
        </div>
      </div>
    </div>
  );
};

export default ClientZone;
