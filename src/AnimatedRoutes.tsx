import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Homepage from './components/pages/HomePage/Homepage'
import Servicepage from './components/pages/ServicePage/Servicepage'
import ScrollToTop from './ScrollToTop'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
        <ScrollToTop/>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homepage/>} />
            <Route path="/marina-town" element={<Homepage/>} />
            <Route path="/marina-town/Service" element={<Servicepage/>} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes