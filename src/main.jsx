import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from './hooks/AuthProvider';
import { ThemeProvider } from './hooks/ThemeProvider ';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-center" autoClose={3000} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
