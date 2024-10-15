import ReactDOM from 'react-dom/client';
// Todo: Bring in the appropriate imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';

// Todo: Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,  // Updated to ErrorPage component
    children: [
      {
        index: true,
        element: <HomePage />,  // Updated to HomePage component
      },
      {
        path: '/ErrorPage',
        element: <ErrorPage />,  // Updated to ErrorPage component
      },
      {
        path: '/ProfilePage',
        element: <ProfilePage />,  // Updated to ProfilePage component
      },
      {
        path: '/AboutPage',
        element: <AboutPage />,  // Updated to AboutPage component
      },
    ],
  },
]);

// Todo: Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
