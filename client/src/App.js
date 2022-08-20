import React from 'react';
import './styles/styles.css'
// import Auth from "./utils/auth";
import Home from './Views/Home';
import Header from './components/header/Header';
import Loginform from './components/loginAndsignup/Loginform';
import Signupform from './components/loginAndsignup/Signupform';
import Developersignup from './components/loginAndsignup/Developersignup';
import Developerlogin from './components/loginAndsignup/Developerlogin';
import ClientHomepage from './components/userProfile/ClientHomepage';
import DeveloperDashboard from './components/userProfile/DeveloperDashboard';
import SupplierCard from './components/createSupplierCard/SupplierCard';
import ViewProfile from './components/userProfile/ViewProfile';
import Suppliers from './components/suppliers/Suppliers'
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import CardDescription from './components/cardDescriptionForm/cardDescriptionForm';
// import UserProfile from './components/userProfile/UserProfile';
import Chat from './components/chat/Chat'




// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


export default function App() {

  return (
  
    <ApolloProvider client={client}>
      <Router>
      <Header /> 
        <Routes>
          <Route path="/" element= { <Home />} />
          <Route path ="/login" element = {<Loginform />} />
          <Route path ="/signup" element = {<Signupform />} />
          <Route path ="/signup/developer" element = {<Developersignup />} />
          <Route path='/login/developer' element={<Developerlogin/>}/>

          <Route path ="/client/homepage" element = {<ClientHomepage />} />
          <Route path ="/client/suppliers" element = {<Suppliers />} />
          <Route path ="/developer/dashboard" element = {<DeveloperDashboard /> } />
          <Route path ="/viewProfile" element = {<ViewProfile /> } />

          <Route path='/login/developer/description' element={<SupplierCard/>}/>
          {/* <Route path='/login/developer/description/test' element={<UserProfile/>}/> */}

          <Route path='/chat' element={<Chat/>}/>

          
    
        </Routes>
      </Router>
     </ApolloProvider>
  )
}





