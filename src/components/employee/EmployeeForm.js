import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import "./employee.css"
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props

    We can create references that can be attached to the input fields in the form. This allows us to get the value of the input fields later once the save button is clicked.
    */

    const name = useRef(null)
    const location = useRef(null)

    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
      getLocations()
    }, [])

    const handleClickNewEmployee = (event) => {
    event.preventDefault() //Prevent browser from submitting the form
    /*
      The `location` and `customer` variables below are
      the references attached to the input fields.
      In React, use `.currentValue` instead of `.value`
    */
    const locationId = parseInt(location.current.value)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      //the following properties match with the database
      addEmployee({
        name: name.current.value,
        locationId,
      })
        .then(() => history.push("/employees"))
      }
    }

    return (
      <form className="employeeForm">
          <h2 className="employeeForm__title">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="employeeName">Employee name: </label>
                  <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>          
          <button className="btn btn-primary"
            onClick={handleClickNewEmployee}>
            Save Employee
          </button>
      </form>
    )
}