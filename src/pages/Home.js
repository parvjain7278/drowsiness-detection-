import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
      <h1>🚗 Drowsiness Detection System</h1>
      <p>Real-time monitoring and alerts to enhance driver safety.</p>
      
      <div style={{ marginTop: '30px' }}>
        <Link to="/dashboard">
          <button style={{ 
            padding: '12px 24px', 
            fontSize: '16px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Go to Live Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
