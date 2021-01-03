import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import "./location.css"
import { useHistory } from 'react-router-dom';

export const LocationForm = () => {
    const { addLocation } = useContext(LocationContext)

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

    const handleClickNewLocation = (event) => {
    event.preventDefault() //Prevent browser from submitting the form
    

    
      //the following properties match with the database
      addLocation({
        name: name.current.value,
        address: address.current.value
      })
        .then(() => history.push("/locations"))
      
    }

    return (
      <form className="locationForm">
          <h2 className="locationForm__title">New Location</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="locationName">Location name: </label>
                  <input type="text" id="locationName" ref={name} required autoFocus className="form-control" placeholder="Location name" />
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="locationAddress">Location Address: </label>
                  <input type="text" id="locationAddress" ref={address} required autoFocus className="form-control" placeholder="Location address" />
              </div>
          </fieldset>          
          <button className="btn btn-primary"
            onClick={handleClickNewLocation}>
            Save Location
          </button>
      </form>
    )
}