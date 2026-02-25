/** MainLayout.tsx
 * @author Dibyasmita
 * @description This is the main layout for the page.
 * @date 18-1-2026
 * @returns a TSX page
 */


// Imports
import { Outlet } from "react-router-dom";


// Exports
export default function MainLayout() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="flex-1 flex flex-col">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};