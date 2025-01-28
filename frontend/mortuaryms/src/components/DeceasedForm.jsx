import React, { Component } from 'react'
import styled from 'styled-components'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const toastOptions = {
    position: 'bottom-left',
    autoClose: 7000,
    theme: 'light',
    draggable: true,
    pauseOnHover: true,
  };
export class DeceasedForm extends Component {
  render() {
    return (
        <FormContainer>

       
        <div>
        <h4>Fill in all deceased information here.</h4>
        <form className="row g-3">
        <div class="input-group">
            <span class="input-group-text">First and last name</span>
<input type="text" aria-label="First name" maxLength={15} className="form-control" />
<input type="text" aria-label="Last name" maxLength={15} class="form-control"></input>
          </div>
          <div class="col-md-2">
<label for="inputAge" class="form-label">Age</label>
<input type="text" maxLength={3} className="form-control" id="inputAge" />
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
<textarea class="form-control" maxLength={300} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<hr></hr>
<h4>Family Member Contact Information</h4>
        <div class="input-group">
            <span class="input-group-text">First and last name</span>
<input type="text" aria-label="First name" maxLength={15} className="form-control" />
<input type="text" aria-label="Last name" maxLength={15} class="form-control"></input>
          </div>
           <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">Phone Number</label>
            <input type="text" maxLength={13} className="form-control" id="inputPhone" />
          </div>
          <div class="col-md-2">
<label for="inputNationalid" class="form-label">National ID Number</label>
<input type="text" maxLength={8} className="form-control" id="inputNationalid" />
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
            <input type="email" maxLength={40} className="form-control" id="inputEmail" />
            
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
            <button type="submit" className="btn btn-primary">Add Deceased</button>
          </div>
        </form>
      </div>
      </FormContainer>
    )
   
  }
   
}
const FormContainer = styled.div`
display:flex;

`
export default DeceasedForm