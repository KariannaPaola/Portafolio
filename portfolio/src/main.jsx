import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Navbar from './components/Navbar.jsx';
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MainLayout>
      <Navbar />
      <App />
    </MainLayout>
    </BrowserRouter>
  </StrictMode>,
)
