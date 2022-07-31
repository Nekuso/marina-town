import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';


function App() {
  return (
      <BrowserRouter>
        <Navbar/>

        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage/>} />
          </Routes>
        </div>

      </BrowserRouter>
  );
}

export default App;
