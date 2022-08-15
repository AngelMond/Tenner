import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/styles.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import SignupAndLogin from './components/loginAndsignup/SignupAndLogin';
import Chat from './components/chat/Chat';
import UserProfile from './components/userProfile/UserProfile';
import ViewProfile from './components/userProfile/ViewProfile';

const client = new ApolloClient({
  uri: '/graphql',
  chache: new InMemoryCache(),
})



export default function App() {
  return (
    <ApolloProvider client={client}>

      <div className="App container-full">
        {/* <Header /> */}
        {/* <Banner /> */}

        {/* <SignupAndLogin /> */}


        <main className="">

          {/* <Chat/> */}
          <UserProfile />
          <ViewProfile />


          {/* <Footer/> */}
        </main>

      </div>
    </ApolloProvider>
  )
}




