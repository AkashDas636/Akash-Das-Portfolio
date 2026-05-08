import React, { lazy, Suspense } from 'react';

// Use local JS file instead of external Framer URL to avoid JSX runtime module resolution issues
import FramerParticlesSphere from './ParticlesSphereFramer.jsx';

export function ParticlesSphere(props: any) {
  return (
    <Suspense fallback={<div className="opacity-0">Loading...</div>}>
      <FramerParticlesSphere {...props} />
    </Suspense>
  );
}
