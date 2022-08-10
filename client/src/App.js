import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/styles.css'

import Header from './components/header/Header'
import Banner from './components/banner/Banner'
// import Chat from '../src/components/chat/Chat.jsx'


function App() {
  return (

        <div className="App container-fluid p-0">
            <Header/>
            <Banner/>
            <main className="">
           
            </main>
            {/* <Chat/> */}
            
            
            {/* <Footer/> */}
        </div>
  );
}

export default App; 
