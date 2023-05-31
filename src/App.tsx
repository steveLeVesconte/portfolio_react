import React from 'react';

import logo from './logo.svg';
import './App.css';
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"

function App() {
  return (<>
    <Header/>


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React App 2023 v3. <code>src/App.tsx</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
