import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

const ParticlesSphere = lazy(() => import(/* @vite-ignore */ "https://framer.com/m/ParticlesSphere-prod-zwwbNg.js"));

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'black' }}>
      <Suspense fallback={<div style={{ color: 'white' }}>Loading...</div>}>
        <ParticlesSphere />
      </Suspense>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
