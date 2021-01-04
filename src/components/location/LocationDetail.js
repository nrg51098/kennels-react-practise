import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      {/* What's up with the question mark???? See below.*/}
      <h4>Animals</h4>
      {location.animals.map((animal)=><p>{animal.name}</p>)}
      <h4>Employees</h4>
      {location.employees.map((employee)=><p>{employee.name}</p>)}     
      
    </section>
  )
}