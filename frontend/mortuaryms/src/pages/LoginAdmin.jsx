// src/pages/LoginAdminStaff.jsx
import React, { Component } from 'react';
import styled from "styled-components";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAdminRoute } from "../utils/APIroutes";  
import withNavigation from "../withNavigation";

class LoginAdminStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    // Basic validation
    if (!username || !password) {
      toast.error("Please fill in both Username and Password", {
        position: "bottom-left",
        autoClose: 7000,
        theme: "dark",
        draggable: true,
        pauseOnHover: true,
      });
      return;
    }

    try {
      const response = await axios.post(loginAdminRoute, { username, password });
      if (response.data.status) {
        const adminData = response.data.foundUser; 
        localStorage.setItem("admin", JSON.stringify(adminData));
        toast.success("Login Successful!", {
          position: "bottom-left",
          autoClose: 7000,
          theme: "dark",
          draggable: true,
          pauseOnHover: true,
        });
        // Redirect to /homepage after a short delay (e.g., 1500ms) so the toast can be seen.
        setTimeout(() => {
          this.props.navigate('/homepage');
        }, 1500);
      } else {
        toast.error(response.data.msg || "Login failed", {
          position: "bottom-left",
          autoClose: 7000,
          theme: "dark",
          draggable: true,
          pauseOnHover: true,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login", {
        position: "bottom-left",
        autoClose: 7000,
        theme: "dark",
        draggable: true,
        pauseOnHover: true,
      });
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <>
        <FormContainer>
          <ToastContainer />
          <iframe 
            src="https://giphy.com/embed/YvX3ZZ5yfXdChkuRne" 
            className="giphy-embed" 
            title="Welcome"></iframe>
          <h4>Mortuary Management System</h4>
          <h3>Welcome Back{username && `, ${username}`}!</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              autoComplete="on"
              maxLength={30}
              placeholder="Username"
              value={username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              maxLength={30}
              autoComplete="on"
              value={password}
              onChange={this.handleChange}
            />
            <div>
                <button type="submit">Login</button>
            </div>
          <div>
            <div>
              <p>OR</p>
            </div>
          <div>
        <a href="/registeradmin">Create Admin Account</a>
      </div>
          </div>
          </form>
        </FormContainer>
      </>
    );
  }
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  width: 100vw;
  background-color: #100F0F;

  h3, h2, h4, p {
    color: white;
  }
    p{
    text-align:center;
    }

  .giphy-embed {
    width: 5rem;
    height: 10rem;
    position: absolute;
    top: -1.5rem;
    left: 26rem;
    border: none;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #01101A;
    border-radius: 2rem;
    padding: 3rem 6rem;
    
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #7A13E2;
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
      background-color: #5C787E;
      padding: 1rem 2rem;
      border: none;
      border-radius: 1rem;
      font-size: 1rem;
      cursor: pointer;
      width:100%;
      text-transform: uppercase;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #7b999e;
      }
    }
  }
`;

export default withNavigation(LoginAdminStaff);
