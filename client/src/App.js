import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/styles.css'

import Home from './Views/Home';
import Header from './components/header/Header';


import SignupAndLogin from './components/loginAndsignup/SignupAndLogin';
import Loginform from './components/loginAndsignup/Loginform';
import Signupform from './components/loginAndsignup/Signupform';
import Chat from './components/chat/Chat';
import UserProfile from './components/userProfile/UserProfile';
import ViewProfile from './components/userProfile/ViewProfile';

import { Route, Routes } from "react-router-dom"





export default function App() {
  return (
    <>
     {/* <Header /> */}
     <Routes>
       <Route path="/" element= {<Home />} />
       <Route path ="/login" element = {<Loginform />} />
       <Route path ="/signup" element = {<Signupform />} />
     </Routes>
    </>
  )
}


// export default function App() {
//   return (
//     <div className="App container-full">
//       {/* <Header /> */}
//       {/* <Banner /> */}
      
//       {/* <SignupAndLogin /> */}

    
//       <main className="">

//          {/* <Chat/> */}
//       <UserProfile />
//       <ViewProfile />
            
            
//         {/* <Footer/> */}
//       </main>

//     </div>
//   )
// }




