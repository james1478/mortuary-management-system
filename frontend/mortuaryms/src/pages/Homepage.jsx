import React, { Component } from 'react';
import styled from 'styled-components';
import DeceasedForm from '../components/DeceasedForm';
import StaffForm from '../components/StaffForm';
import InventoryForm from '../components/InventoryForm';
import DeceasedList from '../components/DeceasedList';
import InventoryList from '../components/InventoryList';
import StaffList from '../components/StaffList';
import Dashboard from '../components/Dashboard';
import BookingForm from '../components/BookingForm';
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

      /**DashBoard ########################## */
      case 'dashboard':
        return (
          <>
          <Dashboard />
          </>
        );

        /**Deceased Form ############################### */
      case 'deceased':
        return (
         <>
         <DeceasedForm />
         </>
        );
        /*staff area ################################## */
      case 'staff':
        return (
         <>
         <StaffForm />
         </>
          
        );
/*inventory information ######################################################### */
      case 'inventory':
        return (
         <>
         <InventoryForm />
         </>
        );
        case 'manage-deceased':
          return (
            <div>
              <DeceasedList />
            </div>
          );
          case 'manage-inventory':
            return (
              <div>
                <InventoryList />
              </div>
            );
            case 'manage-staff':
              return (
                <div>
                  <StaffList />
                </div>
              );
              case 'booking':
            return(
              <>
              <BookingForm />
              </>
            ); 
             case 'manage-bookings':
               return (
                   <BookingList /> 
                   );
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
            <button className="link" onClick={() => this.setActivePage('booking')}>
  Booking <span className="link-span">+</span>
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
               Account Settings
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
      width:90%;

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
        width: 100%;
        over-flow:hidden;
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
        background-color: #333;
        display: flex;
        flex-direction: row;
        align-items: center;
        z-index: 6;
        justify-content: space-around;
        over-flow:hidden;
      }
    }
    height: 100vh;
  }
`;
