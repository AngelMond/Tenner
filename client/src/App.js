import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/styles.css'

import Header from './components/header/Header'
import SignupAndLogin from './components/loginAndsignup/SignupAndLogin';


function App() {
  return (

        <div className="App container-full">
          <Header />
          
          <SignupAndLogin />
          
            <main className="">
            </main>
            
            {/* <Footer/> */}
        </div>
  );
}

export default App;
