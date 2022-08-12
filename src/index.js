import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './SignIn';
import Contact from './Contact';
import Aboutus from './Aboutus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route path="/" element={(<App />)} />
    <Route path="/SignIn" element={(<SignIn />)} />
    <Route path="/Contact" element={(<Contact />)} />
    <Route path="/About" element={(<Aboutus />)} />
    </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

