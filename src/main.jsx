import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Projects from './pages/Projects';
import ApplyForm from './components/ApplyForm.jsx';

// ✅ Layouts
import App from './App.jsx'; // Main layout with Navbar/Footer
const BareLayout = () => <>{<React.Fragment><ApplyForm /></React.Fragment>}</>; // No Navbar/Footer

const router = createBrowserRouter([
  {
    element: <App />, // ✅ With Navbar/Footer
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'projects', element: <Projects /> },
      { path: 'careers', element: <Careers /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  {
    element: <BareLayout />, // ❌ No Navbar/Footer
    children: [
      { path: 'apply-form', element: <ApplyForm /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
