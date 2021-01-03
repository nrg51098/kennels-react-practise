import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"
import { useHistory } from 'react-router-dom';

export const AnimalForm = () => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props

    We can create references that can be attached to the input fields in the form. This allows us to get the value of the input fields later once the save button is clicked.
    */

    const name = useRef(null)
    const location = useRef(null)
    const customer = useRef(null)

    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
      getCustomers().then(getLocations)
    }, [])

    const handleClickNewAnimal = (event) => {
    event.preventDefault() //Prevent browser from submitting the form
    /*
      The `location` and `customer` variables below are
      the references attached to the input fields.
      In React, use `.currentValue` instead of `.value`
    */
    const locationId = parseInt(location.current.value)
    const customerId = parseInt(customer.current.value)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      //the following properties match with the database
      addAnimal({
        name: name.current.value,
        locationId,
        customerId
      })
        .then(() => history.push("/animals"))
      }
    }

    return (
      <form className="animalForm">
          <h2 className="animalForm__title">New Animal</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="animalName">Animal name: </label>
                  <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal name" />
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="customer">Customer: </label>
                  <select defaultValue="" name="customer" ref={customer} id="customerAnimal" className="form-control" >
                      <option value="0">Select a customer</option>
                      {customers.map(c => (
                          <option key={c.id} value={c.id}>
                              {c.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickNewAnimal}>
            Save Animal
          </button>
      </form>
    )
}