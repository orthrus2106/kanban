import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import init from './init';

init().then((vdom) => {
  const container = document.getElementById('root');
  if (!container) {
    throw new Error('Root element not found');
  }
  createRoot(container).render(<StrictMode>{vdom}</StrictMode>);
});
