import React, { Component } from 'react';
import styled from 'styled-components';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'dashboard', // Default page
    };
  }

  setActivePage = (page) => {
    this.setState({ activePage: page });
  };

  renderContent = () => {
    const { activePage } = this.state;

    switch (activePage) {
      case 'dashboard':
        return <p>Welcome to the Dashboard!</p>;
      case 'deceased':
        return (
          <div>
            <h4>Fill in all deceased information here.</h4>
            <form className="row g-3">
            <div class="input-group">
                <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" className="form-control" />
  <input type="text" aria-label="Last name" class="form-control"></input>
              </div>
              <div class="col-md-2">
    <label for="inputAge" class="form-label">Age</label>
    <input type="number" className="form-control" id="inputAge" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputDate" className="form-label">Date of Death</label>
    <input type="date" className="form-control" id="inputDate" />
  </div>
              <div class="col-md-4">
    <label for="inputGender" class="form-label">Gender</label>
    <select id="inputGender" class="form-select">
      <option selected>Select Gender</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Cause of Death</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<hr></hr>
<h4>Family Member Contact Information</h4>
            <div class="input-group">
                <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" className="form-control" />
  <input type="text" aria-label="Last name" class="form-control"></input>
              </div>
               <div className="col-md-6">
                <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                <input type="" className="form-control" id="inputPhone" />
              </div>
              <div class="col-md-2">
    <label for="inputNationalid" class="form-label">National ID Number</label>
    <input type="number" className="form-control" id="inputNationalid" />
  </div>

  <div class="col-md-4">
    <label for="inputRelationshipType" class="form-label">Relationship with the Deceased</label>
    <select id="inputRelationshipType" class="form-select">
      <option selected>Select Relationship Type</option>
      <option>Husband</option>
      <option>Wife</option>
      <option>Father</option>
      <option>Mother</option>
      <option>Brother</option>
      <option>Sister</option>
      <option>Cousin</option>
      <option>Uncle</option>
      <option>Aunt</option>
      <option>GrandFather</option>
      <option>GrandMother</option>
      <option>Guardian</option>
    </select>
  </div>  
              <div className="col-md-6">
                <label htmlFor="inputEmail" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="inputEmail" />
                
              </div>
              












              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </form>
          </div>
        );
        
        ;
        /*staff area ################################## */
      case 'staff':
        return (
          <div>
           <h4>Fill in Staff Details</h4>
           <form className="row g-3">
           <div class="input-group">
                <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" className="form-control" />
  <input type="text" aria-label="Last name" class="form-control"></input>
              </div> 

              <div className="col-md-6">
                <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                <input type="" className="form-control" id="inputPhone" />
              </div>
             
              <div class="col-md-2">
    <label for="inputNationalid" class="form-label">National ID Number</label>
    <input type="number" className="form-control" id="inputNationalid" />
  </div>
  <div class="col-md-4">
    <label for="inputGender" class="form-label">Gender</label>
    <select id="inputGender" class="form-select">
      <option selected>Select Gender</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
        <div className="col-md-6">
                <label htmlFor="inputEmail" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="inputEmail" />
                
              </div>  
         
              <div className="col-md-6">
    <label htmlFor="inputDate" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" id="inputDate" />
  </div>
  <div class="col-md-4">
    <label for="inputRole" class="form-label">Role</label>
    <select id="inputRole" class="form-select">
      <option selected>Select staff role</option>
      <option>Mortician</option>
      <option>Cleaner</option>
      <option>Security</option>
      <option>Receptionist</option>
      <option>Cashier</option>
    </select>
  </div>

  <div class="col-md-4">
    <label for="inputRole" class="form-label">Employment Status</label>
    <select id="inputEmploymentStatus" class="form-select">
      <option selected>Select Employment Status</option>
      <option>Full-time</option>
      <option>Part-time</option>
      <option>Contract</option>
    </select>
  </div>

  <div class="col-md-4">
    <label for="inputShiftDetails" class="form-label">Shift Details</label>
    <select id="inputShiftDetails" class="form-select">
      <option selected>Shift Type</option>
      <option>Day Shift</option>
      <option>Night Shift</option>
    </select>
  </div>

 <div className="col-md-6">
    <label htmlFor="inputDate" className="form-label">Hire Date</label>
    <input type="date" className="form-control" id="inputDate" />
  </div>

  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <h4>Emergency contact</h4>

  <div class="input-group">
                <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" className="form-control" />
  <input type="text" aria-label="Last name" class="form-control"></input>
              </div> 

              <div className="col-md-6">
                <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                <input type="" className="form-control" id="inputPhone" />
              </div>
             

  <div className="col-md-6">
                <label htmlFor="inputEmail" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="inputEmail" />
                
              </div>  

              <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>

  <div class="col-md-4">
    <label for="inputRelationshipType" class="form-label">Relationship with the Staff</label>
    <select id="inputRelationshipType" class="form-select">
      <option selected>Select Relationship Type</option>
      <option>Husband</option>
      <option>Wife</option>
      <option>Father</option>
      <option>Mother</option>
      <option>Brother</option>
      <option>Sister</option>
      <option>Cousin</option>
      <option>Uncle</option>
      <option>Aunt</option>
      <option>GrandFather</option>
      <option>GrandMother</option>
      <option>Guardian</option>
    </select>
  </div> 





           </form>
          </div>
          
        );



/*inventory information ######################################################### */

      case 'inventory':
        return (
          <div>
            <h4>Fill in Inventory Details</h4>
            <form className="row g-3">
            <div className="col-md-6">
                <label htmlFor="inputName" className="form-label">Item Name</label>
                <input type="text" className="form-control" id="inputName" />
                
              </div>
              <div class="col-md-4">
    <label for="inputShiftDetails" class="form-label">Category</label>
    <select id="inputShiftDetails" class="form-select">
      <option selected>Choose Item Category</option>
      <option>Equipment</option>
      <option>Consumables</option>
      <option>Clothing</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputQuantity" class="form-label">Quantity</label>
    <input type="number" className="form-control" id="inputQuantity" />
  </div>
  <div class="col-md-2">
    <label for="inputUnitPrice" class="form-label">Price per Item(Ksh)</label>
    <input type="number" className="form-control" id="inputUnitPrice" />
  </div>


  <div className="col-md-6">
    <label htmlFor="inputDateOfPurchase" className="form-label">Date of Purchase</label>
    <input type="date" className="form-control" id="inputDateOfPurchase" />
  </div>

  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Short Descripton of the Item</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<h4>Supplier Details</h4>
<div className="col-md-6">
                <label htmlFor="inputName" className="form-label">Supplier Name</label>
                <input type="text" className="form-control" id="inputSupplierName" />
                
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                <input type="" className="form-control" id="inputPhone" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="inputEmail" />
                
              </div>  
              <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
            </form>
          </div>
        );
      case 'manage-deceased':
        return <p>Edit or update deceased records here.</p>;
      default:
        return <p>Select a menu item to display content.</p>;
    }
  };

  render() {
    return (
      <HomepageContainer>
        <div className="mini-container">
          {/* Sidebar menu */}
          <div className="menu">
            <div className="account-info">
              <p>Account Information</p>
            </div>
            <button className="link" onClick={() => this.setActivePage('dashboard')}>
              Dashboard
            </button>
            <button className="link" onClick={() => this.setActivePage('deceased')}>
              Deceased <span className="link-span">+</span>
            </button>
            <button className="link" onClick={() => this.setActivePage('staff')}>
              Staff <span className="link-span">+</span>
            </button>
            <button className="link" onClick={() => this.setActivePage('inventory')}>
              Inventory <span className="link-span">+</span>
            </button>
            <button className="link" onClick={() => this.setActivePage('manage-deceased')}>
              Manage Deceased
            </button>
            <button className="link" onClick={() => this.setActivePage('manage-inventory')}>
              Manage Inventory
            </button>
            <button className="link" onClick={() => this.setActivePage('manage-staff')}>
              Manage Staff
            </button>
            <button className="link" onClick={() => this.setActivePage('manage-bookings')}>
              Manage Bookings
            </button>
          </div>

          {/* Main content area */}
          <div className="content">
            <div className="content-mini-menu">
              <button className="link" onClick={() => alert('Logging out...')}>
                Logout
              </button>
              <h4>24, October</h4>
              <button className="link" onClick={() => alert('Settings Page')}>
                Settings
              </button>
            </div>

            {/* Render content based on selected page */}
            {this.renderContent()}
          </div>
        </div>
      </HomepageContainer>
    );
  }
}

const HomepageContainer = styled.div`
  .mini-container {
    display: grid;
    grid-template-columns: 1fr 3fr;

    .menu {
      box-shadow: 0.1rem 0.4rem 0.3rem #333;
      z-index: 2;

      .account-info {
        display: flex;
        justify-content: space-around;
      }

      background-color: #6a9c89;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .link {
        text-decoration: none;
        color: #fff;
        background-color: #333;
        padding: 1rem;
        margin-left: 0.2rem;
        width: 85%;
        border: 0.4rem solid #c1d8c3;
        box-shadow: 0 0.8rem 0.7rem #fdfad9;
        cursor: pointer;
      }

      .link:hover {
        box-shadow: 0 0 0.7rem #640d5f;
        z-index: 3;
      }
    }

    .content {
      background-color: #fff;

      .content-mini-menu {
        background-color: #c1d8c3;
        display: flex;
        flex-direction: row;
        align-items: center;
        z-index: 6;
        justify-content: space-around;
      }
    }
    height: 100vh;
  }
`;
