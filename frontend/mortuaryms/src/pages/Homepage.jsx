import React, { Component } from 'react'
import styled from 'styled-components';
export default class Homepage extends Component {
  render() {
    return (
        
        <HomepageContainer>
           <div className="mini-container">
            <div className="menu">
                <div className="account-info">
                    <p>account information</p>
                </div>
                <a className="link" href="#">Dashboard</a>
                <a className="link" href="#">Deceased <span className="link-span">+</span></a>
                <a className="link" href="#"> Staff <span className="link-span">+</span></a>
                <a className="link" href="#">Manage Inventory</a>
                <a className="link" href="#">Manage Deceased</a>
                <a className="link" href="#">Manage Staff</a>
                <a className="link" href="#">Manage Bookings</a>
            </div>
        <div className="content">
            <p>content</p> 
        </div>
       
      </div> 
        </HomepageContainer>
        
      
    )
  }
}
const HomepageContainer = styled.div`
.mini-container{
display:grid;
grid-template-columns: 1fr 3fr;
.menu{
box-shadow: .1rem .4rem .3rem #333;
z-index:2;
.account-infor{
display:flex;
justify-content: space-around;
background-color:#FFF0D1;
}
  background-color: #C1D8C3;
  display:flex;
  flex-direction:column;
  gap: .5rem;

  .link{
  text-decoration:none;
  color:#fff;
  background-color:#333;
  padding:1rem;
  margin-left:.2rem;
  width:85%;
  border: .5rem solid #7A13E2;
box-shadow: 0 .8rem .7rem #FDFAD9;
  }
  .link:hover{
  box-shadow: 0 0 .7rem #640D5F;
  z-index:3;
  }
  }
  .content{
  background-color: #fff;
  }
  height: 100vh;
}

`;
