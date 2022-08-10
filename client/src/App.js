import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/styles.css'

import Header from './components/header/Header'
import Chat from '../src/components/chat/Chat.jsx'


function App() {
  return (

        <div className="App container-full">
          <Header/>
            
            <main className="">
           
            </main>
            <Chat/>
            
            
            {/* <Footer/> */}
        </div>
  );
}

export default App; 
