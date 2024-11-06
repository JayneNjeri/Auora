import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Providers from './Pages/Providers.jsx';
import Contact from './Pages/Contact.jsx'
import SignIn from './Pages/Signin.jsx';
import SignUp from './Pages/Signup.jsx';
import ErrorPage from './ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'about-us', element: <About /> },
      { path: 'providers', element: <Providers /> },
      { path: 'contact-us', element: <Contact /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'sign-in', element: <SignIn /> }
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
