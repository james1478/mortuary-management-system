import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterAdmin from './pages/RegisterAdmin';
import LoginAdminStaff from './pages/LoginAdminStaff';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/registeradmin' element={<RegisterAdmin />} />
          <Route path='/loginadminstaff' element={<LoginAdminStaff />} />
          <Route path='/homepage' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
