import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterAdmin from './pages/RegisterAdmin';
import LoginAdminStaff from './pages/LoginAdminStaff';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DeceasedDetails from './components/DeceasedDetails';
import EditDeceased from './pages/EditDeceased';
import InventoryList from './components/InventoryList';
import InventoryDetails from './components/InventoryDetails';
import EditInventory from './pages/EditInventory';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/registeradmin' element={<RegisterAdmin />} />
          <Route path='/loginadminstaff' element={<LoginAdminStaff />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/deceased/:id' element={<DeceasedDetails />} />
          <Route path='/edit-deceased/:id' element={<EditDeceased />} />
          <Route path='/inventorylist' element={<InventoryList />} />
          <Route path='/inventory/:id' element={<InventoryDetails />} />
          <Route path='/edit-inventory/:id' element={<EditInventory />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
