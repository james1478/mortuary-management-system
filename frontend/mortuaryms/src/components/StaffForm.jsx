import React, { Component } from 'react'

export class StaffForm extends Component {
  render() {
    return (
        <div>
        <h4>Fill in Staff Details</h4>
        <form className="row g-3">
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
 <label for="inputGender" class="form-label">Gender</label>
 <select id="inputGender" class="form-select">
   <option selected>Select Gender</option>
   <option>Male</option>
   <option>Female</option>
 </select>
</div>
     <div className="col-md-6">
             <label htmlFor="inputEmail" className="form-label">Email Address</label>
             <input type="email" maxLength={40} className="form-control" id="inputEmail" />
             
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
 <input type="text" maxLength={80} class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
</div>
<h4>Emergency contact</h4>

<div class="input-group">
             <span class="input-group-text">First and last name</span>
<input type="text" aria-label="First name" maxLength={15} className="form-control" />
<input type="text" aria-label="Last name" maxLength={15} class="form-control"></input>
           </div> 

           <div className="col-md-6">
             <label htmlFor="inputPhone" className="form-label">Phone Number</label>
             <input type="text" maxLength={13} className="form-control" id="inputPhone" />
           </div>
          

<div className="col-md-6">
             <label htmlFor="inputEmail" className="form-label">Email Address</label>
             <input type="email" maxLength={40} className="form-control" id="inputEmail" />
             
           </div>  

           <div class="col-12">
 <label for="inputAddress" class="form-label">Address</label>
 <input type="text" maxLength={80} class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
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


<div className="col-12">
            <button type="submit" className="btn btn-primary">Add Staff</button>
          </div>


        </form>
       </div>
    )
  }
}

export default StaffForm
