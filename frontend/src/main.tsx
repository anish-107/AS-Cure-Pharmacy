/** main.tsx
 * @author Dibyasmita
 * @date 18-1-2026
 * @description This file is the main tsx file that will be renedered on the `index.html` file.
 * @returns A TSX Page
 */


// Imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import App from '@/App.tsx';


// Rendering 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
