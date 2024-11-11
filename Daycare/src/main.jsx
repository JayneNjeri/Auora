import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Providers from './Pages/Providers';
import Contact from './Pages/Contact';
import ErrorPage from './ErrorPage';
import FAQ from './Pages/Faq';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'providers', element: <Providers /> },
      { path: 'contact', element: <Contact /> },
      { path: 'faq', element: <FAQ /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);