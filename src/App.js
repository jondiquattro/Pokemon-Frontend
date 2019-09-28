import React from 'react';
import Header from './Header'
import LeftSideBar from './LeftSideBar';
import Middle from './Middle';
import Right from './Right'
import Footer from "./Footer";

import './App.css';

function App() {


  return (
    <div className="App">
      <Header/>
      <div className={"content"}>
        <LeftSideBar/>
        <Middle />
        <Right />
      </div>
      <Footer/>

    </div>
  );
}

export default App;
