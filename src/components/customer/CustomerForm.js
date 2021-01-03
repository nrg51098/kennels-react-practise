import React, { useContext, useRef, useEffect } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import "./customer.css"
import { useHistory } from 'react-router-dom';

export const CustomerForm = () => {
    const { addCustomer } = useContext(CustomerContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props

    We can create references that can be attached to the input fields in the form. This allows us to get the value of the input fields later once the save button is clicked.
    */

    const name = useRef(null)
    const address = useRef(null)

    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    const handleClickNewCustomer = (event) => {
    event.preventDefault() //Prevent browser from submitting the form    
      //the following properties match with the database
      addCustomer({
        name: name.current.value,
        address: address.current.value
      })
        .then(() => history.push("/customers"))
      
    }

    return (
      <form className="customerForm">
          <h2 className="customerForm__title">New Customer</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="customerName">Customer name: </label>
                  <input type="text" id="customerName" ref={name} required autoFocus className="form-control" placeholder="Customer name" />
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="customerAddress">Customer address: </label>
                  <input type="text" id="customerAddress" ref={address} required autoFocus className="form-control" placeholder="Customer address" />
              </div>
          </fieldset>
                   
          <button className="btn btn-primary"
            onClick={handleClickNewCustomer}>
            Save Customer
          </button>
      </form>
    )
}