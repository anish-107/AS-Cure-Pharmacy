/** main.tsx
 * @author Dibyasmita
 * @date 18-1-2026
 * @description This file is the tsx file that will be renedered on the `main.tsx` file.
 * @returns A TSX Page
 */


// Imports
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';


// Pages
const HomePage = lazy(() => import("@/pages/HomePage"));


// Export
export default function App() {
  // Logic
  // If needed in future
  
  // Return 
  return (
    // Router 
    <BrowserRouter>
      <Suspense fallback={<div className="p-6">Loading...</div>}>
        <Routes>
          {/* Public / root */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};