import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'UNAI2026') {
      localStorage.setItem('uoe_auth', 'true');
      navigate('/client-zone');
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', padding: '10rem 2rem' }}>
      <h1 className="text-huge" style={{ margin: 0, marginBottom: '4rem' }}>CLIENT ZONE</h1>
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '600px', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="mono uppercase" style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.6 }}>
            ACCESS CODE {error && <span style={{ color: 'red', marginLeft: '1rem' }}>INVALID CODE</span>}
          </label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              borderBottom: error ? '2px solid red' : '2px solid #fff', 
              color: error ? 'red' : '#fff', 
              fontSize: '2rem', 
              padding: '0.5rem 0',
              outline: 'none',
              fontFamily: 'monospace'
            }} 
            placeholder="••••••••"
          />
        </div>
        
        <button 
          type="submit"
          className="uppercase"
          style={{
            alignSelf: 'flex-start',
            background: '#fff',
            color: '#000',
            border: 'none',
            padding: '1rem 3rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '2rem'
          }}
        >
          ENTER
        </button>
      </form>

      <Link to="/" style={{ marginTop: 'auto', textDecoration: 'underline', opacity: 0.5 }}>← RETURN TO PORTFOLIO</Link>
    </div>
  );
};

export default Login;
