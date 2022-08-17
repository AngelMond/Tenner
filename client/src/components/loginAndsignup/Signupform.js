import React from 'react'
import "./SignupAndLogin.css"
import { useState } from "react"
// import { Form, Button, Alert } from "react-bootstrap";
// // import Auth from "../utils/mutations";
// import{ useMutation } from "@apollo/client"

export default function Signupform() {

  // const LOGIN_USER = "loginUser";

  const [userFormData, setUserFormData] = useState({ email: "", password: ""});
  const [validated] = useState(false);
  const[showAlert, setShowAlert] = useState(false);

  // const[loginUser, {error, data}] = useMutation(LOGIN_USER);

  const handleInputchange = (event) => {
    const { name, value } = event.target;
    setUserFormData({...userFormData, [name]: value });
  };

  const HandleFormSubmit = ""
  //   event.preventDefault();

  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   try {
  //     const { data } = await loginUser({
  //       variables: userFormData
  //     });

  //     Auth.login(data.login.token);
  //   } catch (err) {
  //     console.log(err);
  //     setShowAlert(true);
  //   }

  //   setUserFormData({
  //     username:"",
  //     email:"",
  //     password:"",
  //   });
  // };

  return (
    <div className='Auth-form-container mt-3'>
      
      
      <form className="Auth-form" noValidate validated = {validated} onSubmit={HandleFormSubmit}>
        {/* <alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant ="danger">
          Something went wrong with your login credentials!
        </alert> */}

        <div className='Auth-form-content'>

          <h3 className='Auth-form-title'>Sign Up</h3>

          <div className="form-group mt-3">
            <label html="email">Username</label>
            <input
            type="text"
            className='form-control mt-1'
            placeholder="Enter Username"
            onChange={handleInputchange}
            value={userFormData.email}
            required
            />
            {/* <Form.Control.Feedback type="invalid">Email is required!</Form.Control.Feedback> */}
          </div>

          <div className="form-group mt-3">
            <label html="email">Email</label>
            <input
            type="text"
            className='form-control mt-1'
            placeholder="Enter Email"
            onChange={handleInputchange}
            value={userFormData.email}
            required
            />
            {/* <Form.Control.Feedback type="invalid">Email is required!</Form.Control.Feedback> */}
          </div>

          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            className='form-control mt-1'
            placeholder="Your Password"
            name="password"
            value={userFormData.password}
            required
            />
            {/* <Form.Control.Feedback type="invalid">Password is required!</Form.Control.Feedback> */}
          </div>

          <div className="form-group mt-3">
            <a href = "/signup/developer" >
              <label>If you plan to offer your services click on the button below.</label>
              <button  className="btn btn-primary"
              type="button">
                Click here to create a Developer Account!
              </button>
            </a>
          </div>
       

          <div className='d-grid gap-2 mt-3'>
            <button className="btn btn-primary"
            disabled={!(userFormData.email && userFormData.password)}
            type="submit"
            variant="success">
              Create Account
            </button>
          </div>
        </div>
      </form>

      
    </div>
  )
}
