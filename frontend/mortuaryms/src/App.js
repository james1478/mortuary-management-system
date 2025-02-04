import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterAdmin from './pages/RegisterAdmin';
import LoginAdmin from './pages/LoginAdmin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DeceasedDetails from './components/DeceasedDetails';
import EditDeceased from './pages/EditDeceased';
import InventoryList from './components/InventoryList';
import InventoryDetails from './components/InventoryDetails';
import EditInventory from './pages/EditInventory';
import StaffList from './components/StaffList';
import StaffDetails from './components/StaffDetails';
import EditStaff from './pages/EditStaff';
import BookingList from './components/BookingList';
import BookingDetails from './components/BookingDetails';
import AccountSettings from './pages/AccountSettings';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/registeradmin' element={<RegisterAdmin />} />
          <Route path='/' element={<LoginAdmin />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/accountsettings' element={<AccountSettings />} />
          <Route path='/deceased/:id' element={<DeceasedDetails />} />
          <Route path='/edit-deceased/:id' element={<EditDeceased />} />
          <Route path='/inventorylist' element={<InventoryList />} />
          <Route path='/inventory/:id' element={<InventoryDetails />} />
          <Route path='/edit-inventory/:id' element={<EditInventory />} />
          <Route path='/stafflist' element={<StaffList />} />
          <Route path='/staff/:id' element={<StaffDetails />} />
          <Route path='/edit-staff/:id' element={<EditStaff />} />
          <Route path='/bookinglist' element={<BookingList />} />
          <Route path='/booking/:id' element={<BookingDetails />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
