import React, { Component } from 'react'
import styled from "styled-components"
export default class RegisterAdmin extends Component {
  render() {
    return (
        <>
          <FormContainer>
          <iframe src="https://giphy.com/embed/YvX3ZZ5yfXdChkuRne" class="giphy-embed"></iframe><p><a href="https://giphy.com/gifs/Friedrich-Naumann-Stiftung-friedrich-fnsfdf-naumann-YvX3ZZ5yfXdChkuRne"></a></p>
            <h2>Mortuary management system</h2>
<form>
       
       <input type='text' name='username' autoComplete='true' maxLength={30}  placeholder='Username'></input>
       <input type='email' name='email' placeholder='Email' maxLength={40}  autoComplete='true'></input>
       <input type='password' name='password' placeholder='Password' maxLength={30} autoComplete='true'></input>
       <input type='password' name='confirmPassword' placeholder='Confirm Password' maxLength={30}  autoComplete='true'></input>
       <button type='submit'>create Admin account</button>
     
   </form>
      </FormContainer>
        
    
        </>
      
    )
}
}
const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
height:100vh;
width:100vw;
background-color:#100F0F;
h2{
  color:white;
  }
  .giphy-embed{
  width:5rem;
  height:10rem;
  position:absolute;
  top:0.5rem;
  left:26rem;
  frame-border:0;
  border-style:none;

  }
.brand{
  display:flex;
  justify-content: center;
  align-items:center;
  gap:1rem;
  img{
      height:3rem;
  }
  h1{
      color:white;
      text-transform:uppercase;
      font-size:1.6rem;
  }
}
form{
  display:flex;
  flex-direction:column;
  gap:2rem;
  background-color:#01101A;
  border-radius:2rem;
  padding:3rem 6rem;
  input{
      background-color:transparent;
      padding:1rem;
      border: .1rem solid #7A13E2;
      border-radius: .4rem;
      color:white;
      width:100%;
      font-size: .9rem;
      &:focus{
          border: .1rem solid #69cbe6;
          outline:none;
      }
  }
  button{
      background-color: #5C787E;
      padding: 1rem 2rem;
      border:none;
      border-radius: 1rem;
      font-size:1rem;
      cursor:pointer;
      text-transform:uppercase;
      transition: .3s ease-in-out;
      &:hover{
          background-color:#7b999e;
      }
  }
  span{
      color:white;
      text-align:center;
      a{
          color:green;
          text-decoration:none;
          margin-left:.3rem;
      }
  }
 
}


`;
