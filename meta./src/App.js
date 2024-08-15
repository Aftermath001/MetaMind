
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Layout/partials/Navbar/Navbar';
import Footer from './Layout/partials/Footer/Footer';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
   <Router>
        <div>
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route path='home' element={<Home/>}/>
            </Route>
          </Routes>

         
        </div>
      </Router>
    
    </div>
  );
}

export default App;