import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import GlobalStyle from './components/styles/Global';

function App() {
  return (
    <BrowserRouter>

        <GlobalStyle/>
          <Navbar/>
          
          <div className="content">
            <Routes>
              <Route path="/marina-town" element={<Homepage/>} />
            </Routes>
          </div>

    </BrowserRouter>
  );
}

export default App;
