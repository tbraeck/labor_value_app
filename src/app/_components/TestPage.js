// pages/test.js
import React from 'react';

export default function TestPage() {
  const backgroundImageStyle = {
    backgroundImage: 'url(/public/working.jpg)', // Path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <div style={backgroundImageStyle}>
      <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '40vh' }}>
        Background Image Test
      </h1>
    </div>
  );
}
