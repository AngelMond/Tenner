import React from 'react';
import './SignupAndLogin.css';
import { useState } from 'react';
import Auth from '../../utils/auth';
import{ useMutation } from '@apollo/client';
import { CREATE_SUPPLIER } from '../../utils/mutations';

export default function Developersignup() {

// set initial form state
const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
// set state for form validation
const [validated] = useState(false);
// set state for alert
const [showAlert, setShowAlert] = useState(false);

const [createSupplier, {error, data}] = useMutation(CREATE_SUPPLIER);

const handleInputChange = (event) => {
  const { name, value } = event.currentTarget;
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

    const {data} = await createSupplier({
      variables: { input: userFormData }
    });

    console.log(data);
    Auth.login(data.createSupplier.token);
  } catch (err) {
    console.error(err);
    setShowAlert(true);
  }

  setUserFormData({
    username: '',
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

          <h3 className='Auth-form-title'>Developer Sign Up</h3>

          <div className="form-group mt-3">
            <label html="username">Username</label>
            <input
            type="text"
            name='username'
            className='form-control mt-1'
            placeholder="Enter Username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
            />
            {/* <Form.Control.Feedback type="invalid">Email is required!</Form.Control.Feedback> */}
          </div>

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
            disabled={!(userFormData.email && userFormData.password && userFormData.username)}
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

