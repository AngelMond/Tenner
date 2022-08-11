import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/styles.css'

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import SignupAndLogin from './components/loginAndsignup/SignupAndLogin';
import Chat from './components/chat/Chat';



export default function App() {
  return (
    <div className="App container-full">
      <Header />
      <Banner />
      
      <SignupAndLogin />

    
      <main className="">
<<<<<<< HEAD
         <Chat/>
=======
        <Chat/>
>>>>>>> a2c1ed05362e1c33f0f35ee751c9b77191c21bac
            
            
        {/* <Footer/> */}
      </main>

    </div>
  )
}




