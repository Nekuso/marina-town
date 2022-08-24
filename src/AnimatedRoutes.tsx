import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Servicepage from './pages/Servicepage'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homepage/>} />
            <Route path="/marina-town" element={<Homepage/>} />
            <Route path="/marina-town/Service" element={<Servicepage/>} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes