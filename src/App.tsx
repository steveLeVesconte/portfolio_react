import React from 'react';

import logo from './logo.svg';
import './App.css';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import PublicAccess from "./components/projects/public-access/public-access";
function App() {
  return (<>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/public-access" element={<PublicAccess />} />

    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
