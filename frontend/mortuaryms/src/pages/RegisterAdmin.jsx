import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { registerAdminRoute } from '../utils/APIroutes';
import { useNavigate } from 'react-router-dom';

const RegisterAdmin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const toastOptions = {
    position: 'bottom-left',
    autoClose: 7000,
    theme: 'light',
    draggable: true,
    pauseOnHover: true,
  };

 // useEffect(() => {
   // if (localStorage.getItem(process.env.LOCALHOST_KEY)) {
   //   navigate('/');
   // }
  //}, [navigate]);

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;
    if (!username) {
      toast.error('Username is required.', toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error('Username should be greater than 3 characters.', toastOptions);
      return false;
    } else if (!email) {
      toast.error('Email is required.', toastOptions);
      return false;
    } else if (email.length < 11) {
      toast.error('Invalid email.', toastOptions);
      return false;
    } else if (!password) {
      toast.error('Password is required.', toastOptions);
      return false;
    } else if (confirmPassword !== password) {
      toast.error('Password and Confirm Password should be the same.', toastOptions);
      return false;
    } else if (password.length < 5) {
      toast.error('Password should be greater than 5 characters.', toastOptions);
      return false;
    } else if (password.includes('123456') || password.includes('asdfgh')) {
      toast.error('Password is too easy to guess.', toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, email, password } = values;
      const role = 'admin';
      try {
        console.log({ username, email, password, role });
        const { data } = await axios.post(registerAdminRoute, {
          username,
          email,
          password,
          role,
        });
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        } else if (data.status === true) {
          localStorage.setItem(process.env.LOCALHOST_KEY, JSON.stringify(data.user));
          navigate('/');
        }
        console.log(data);
        
      } catch (error) {
        toast.error('Failed to register admin.', toastOptions);
      }
    }
  };
  
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <ToastContainer />
      <FormContainer>
        <iframe src="https://giphy.com/embed/YvX3ZZ5yfXdChkuRne" className="giphy-embed"></iframe>
        <h2>Mortuary management system</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            autoComplete="true"
            maxLength={30}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            maxLength={40}
            autoComplete="true"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            maxLength={30}
            autoComplete="true"
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            maxLength={30}
            autoComplete="true"
            onChange={handleChange}
          />
          <button type="submit">Create Admin Account</button>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  width: 100vw;
  background-color: #100f0f;
  h2 {
    color: white;
  }
  .giphy-embed {
    width: 5rem;
    height: 10rem;
    position: absolute;
    top: 0.5rem;
    left: 26rem;
    border-style: none;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #01101a;
    border-radius: 2rem;
    padding: 3rem 6rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #7a13e2;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 0.9rem;
      &:focus {
        border: 0.1rem solid #69cbe6;
        outline: none;
      }
    }
    button {
      background-color: #5c787e;
      padding: 1rem 2rem;
      border: none;
      border-radius: 1rem;
      font-size: 1rem;
      cursor: pointer;
      text-transform: uppercase;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #7b999e;
      }
    }
  }
`;

export default RegisterAdmin;
