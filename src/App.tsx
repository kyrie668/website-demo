import React, { useEffect } from 'react';
import './App.css';
import Layout from './layout';
import { useLocation } from 'react-router';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Layout />;
}

export default App;
