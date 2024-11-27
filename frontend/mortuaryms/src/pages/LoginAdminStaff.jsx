import React, { Component } from 'react';
import styled from "styled-components";
import TypingEffect from '../components/TypingEffect';

export default class LoginAdminStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username } = this.state;

    return (
      <>
        <FormContainer>
          <iframe src="https://giphy.com/embed/YvX3ZZ5yfXdChkuRne" className="giphy-embed"></iframe>
          <TypingEffect text="Mortuary Management System" speed={100} />
          <h3>Welcome Back{username && `, ${username}`}!</h3>
          <form>
            <input
              type="text"
              name="username"
              autoComplete="true"
              maxLength={30}
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              maxLength={30}
              autoComplete="true"
            />
            <button type="submit">Login</button>
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

  h3, h2 {
    color: white;
  }

  .giphy-embed {
    width: 5rem;
    height: 10rem;
    position: absolute;
    top: -2rem;
    left: 40rem;
    frame-border: 0;
    border-style: none;
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
      text-transform: uppercase;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #7b999e;
      }
    }
  }
`;
