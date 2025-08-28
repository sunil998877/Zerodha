import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './landing_page/Home/HomePage'
import AboutPage from './landing_page/About/AboutPage.jsx';

import PricingPage from './landing_page/Pricing/PricingPage'
import ProductPage from './landing_page/Product/ProductPage'
import SignupPage from './landing_page/Signup/SignupPage.jsx'
import SupportPage from './landing_page/Support/SupportPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import PageNotfound from './landing_page/PageNotfound.jsx'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<PageNotfound />} />

    </Routes>
    <Footer/>
  </BrowserRouter>
)
