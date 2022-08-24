import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import GlobalStyle from './components/styles/Global';
import Footer from './components/Footer';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (

    <Router>
      <GlobalStyle/>
      <Navbar/>

      <div className="content">
        <AnimatedRoutes/>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
