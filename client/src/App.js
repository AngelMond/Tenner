import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/styles.css'

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import SignupAndLogin from './components/loginAndsignup/SignupAndLogin';
import Chat from './components/chat/Chat';
import UserProfile from './components/userProfile/UserProfile';
import ViewProfile from './components/userProfile/ViewProfile';



export default function App() {
  return (
    <div className="App container-full">
      <Header />
      {/* <Banner /> */}
      
      {/* <SignupAndLogin /> */}

    
      <main className="">

         {/* <Chat/> */}
      <UserProfile />
      <ViewProfile />
            
            
        {/* <Footer/> */}
      </main>

    </div>
  )
}




