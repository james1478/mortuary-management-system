import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterAdmin from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/registeradmin' element={<RegisterAdmin />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
