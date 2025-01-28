import React, { Component } from 'react'

export class InventoryForm extends Component {
  render() {
    return (
        <div>
        <h4>Fill in Inventory Details</h4>
        <form className="row g-3">
        <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">Item Name</label>
            <input type="text" maxLength={30} className="form-control" id="inputName" />
            
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
<textarea class="form-control" maxLength={200} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<h4>Supplier Details</h4>
<div className="col-md-6">
            <label htmlFor="inputName" className="form-label">Supplier Name</label>
            <input type="text" maxLength={30} className="form-control" id="inputSupplierName" />
            
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
<div className="col-12">
            <button type="submit" className="btn btn-primary">Add Item</button>
          </div>
        </form>
      </div>
    )
  }
}

export default InventoryForm