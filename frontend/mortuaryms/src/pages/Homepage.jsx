// src/pages/Homepage.jsx
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
import BookingList from '../components/BookingList';
import withNavigation from "../withNavigation";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'dashboard', // Default page
      admin: null,             // To store the logged-in admin's details
    };
  }

  componentDidMount() {
    // Get the admin information from localStorage
    const adminData = localStorage.getItem('admin');
    if (adminData) {
      try {
        const admin = JSON.parse(adminData);
        this.setState({ admin });
      } catch (err) {
        console.error("Error parsing user from localStorage:", err);
        this.setState({ admin: null });
      }
    } else {
      this.setState({ admin: null });
    }
  }

  setActivePage = (page) => {
    this.setState({ activePage: page });
  };

  handleLogout = () => {
    // Clear admin info from localStorage and navigate to the login page
    localStorage.removeItem('admin');
    this.props.navigate('/loginadmin');
  };

  handleAccountSettings = () => {
    // Navigate to the account settings page
    this.props.navigate('/accountsettings');
  };

  renderContent = () => {
    const { activePage } = this.state;

    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'deceased':
        return <DeceasedForm />;
      case 'staff':
        return <StaffForm />;
      case 'inventory':
        return <InventoryForm />;
      case 'booking':
        return <BookingForm />;
      case 'manage-deceased':
        return <DeceasedList />;
      case 'manage-inventory':
        return <InventoryList />;
      case 'manage-staff':
        return <StaffList />;
      case 'manage-bookings':
        return <BookingList />;
      default:
        return <p>Select a menu item to display content.</p>;
    }
  };

  render() {
    const { admin } = this.state;
    return (
      <HomepageContainer>
        <div className="mini-container">
          {/* Sidebar menu */}
          <div className="menu">
            <div className="account-info">
              <h5>Mortuary Management System</h5>
              <hr></hr>
              {admin ? (
                <>
                  <p><span>Logged in as : </span><strong>{admin.username}</strong></p>
                  <p>({admin.role})</p>
                </>
              ) : (
                <p>Account Information</p>
              )}
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
              <button className="link" onClick={this.handleLogout}>
                Logout
              </button>
              <div>
              {admin ? (
                <>
                  <h4><strong>Welcome,{admin.username}</strong></h4>
                  
                </>
              ) : (
                <p>Welcome!</p>
              )}
              </div>
              <button className="link" onClick={this.handleAccountSettings}>
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
      width: 90%;
      background-color: #6a9c89;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;

      .account-info {
        background: #333;
        color: #fff;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
      }

      .link {
        text-decoration: none;
        color: #fff;
        background-color: #333;
        padding: 1rem;
        margin: 0.2rem 0;
        width: 100%;
        overflow: hidden;
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
      padding: 1rem;

      .content-mini-menu {
        background-color: #333;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        padding: 1rem;
        color: #fff;
      }
    }
    height: 100vh;
  }
`;

export default withNavigation(Homepage);
