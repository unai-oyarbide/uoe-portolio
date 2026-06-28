import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Projects from './pages/Projects';
import ClientZone from './pages/ClientZone';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/client-zone" element={<ClientZone />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
