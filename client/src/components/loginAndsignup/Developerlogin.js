import React from 'react';
import "./SignupAndLogin.css"
import { useState } from "react"
import Auth from "../../utils/auth";
import{ useMutation } from "@apollo/client";
import { LOGIN_SUPPLIER } from '../../utils/mutations';


export default function Loginform() {

  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [loginSupplier, {error, data}] = useMutation(LOGIN_SUPPLIER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {

      const { data } = await loginSupplier({
        variables: userFormData
      });

      console.log(data);
      Auth.login(data.loginSupplier.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (


    <div className='Auth-form-container mt-3'>
      <form className="Auth-form" onSubmit={handleFormSubmit}>
        {/* <alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant ="danger">
          Something went wrong with your login credentials!
        </alert> */}

        <div className='Auth-form-content'>

          <h3 className='Auth-form-title'>Sign In</h3>

          <div className="form-group mt-3">
            <label html="email">Email</label>
            <input
            type="text"
            name='email'
            className='form-control mt-1'
            placeholder="Enter Email"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            placeholder="Your Password"
            name="password"
            value={userFormData.password}
            required
            />
            {/* <Form.Control.Feedback type="invalid">Password is required!</Form.Control.Feedback> */}
          </div>


          <div className='d-grid gap-2 mt-3'>
            <button className="btn btn-primary"
            disabled={!(userFormData.email && userFormData.password)}
            type="submit"
            variant="success">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
