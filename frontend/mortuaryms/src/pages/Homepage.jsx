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
                <a className="link" href="#">Inventory <span className="link-span">+</span></a>
                <a className="link" href="#">Manage Inventory</a>
                <a className="link" href="#">Manage Deceased</a>
                <a className="link" href="#">Manage Staff</a>
                <a className="link" href="#">Manage Bookings</a>
            </div>
        <div className="content">
          <div className="content-mini-menu">
          
                <a className="link" href="#">Logout</a>
                <h4>24,october</h4>
                <a className="link" href="#">Settings</a>
          </div>
            <p>is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since 
              the 1500s, when an unknown printer took a galley of type and scrambled 
              it to make a type specimen book. It has survived not only five centuries,
               but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing
                 Lorem Ipsum passages, and more recently with desktop publishing software like 
                 Aldus PageMaker including versions of Lorem Ipsum.</p> 
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
box-shadow: .1rem  .4rem .3rem #333;
z-index:2;

.account-info{
display:flex;
justify-content: space-around;

}

  background-color: #6A9C89;
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
  border: .4rem solid #C1D8C3 ;
box-shadow: 0 .8rem .7rem #FDFAD9;
  }
  .link:hover{
  box-shadow: 0 0 .7rem #640D5F;
  z-index:3;
  }
  }


  .content{
  background-color: #fff;

 .content-mini-menu{



   background-color:#C1D8C3 ;
  display:flex;
  flex-direction:row;
  align-items:center;
  z-index:6;
  justify-content:space-around;
  }

  }
  height: 100vh;
}

`;
