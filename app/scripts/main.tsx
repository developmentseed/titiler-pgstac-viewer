import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { Viewer } from './viewer';

// Root component.
function Root() {

  useEffect(() => {
    // Hide the welcome banner.
    const banner = document.querySelector('#welcome-banner');
    if (!banner) return;

    banner.classList.add('dismissed');
    setTimeout(() => banner.remove(), 500);
  }, []);

  return <Viewer />;
}

const rootNode = document.querySelector('#app-container');
if (!rootNode) throw new Error('Root node not found');

const root = createRoot(rootNode);
root.render(<Root />);
