import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="page">
      <Header />
      <Main />      
      <Footer />
    </div>

  );
}

export default App;
