import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useHistory } from "react-router-dom"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)

    const history = useHistory()

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()        
    }, [])

  return (
    <>
    <h2>Animals</h2>
		<button onClick={() => {history.push("/animals/create")}}>
            Add Animal
        </button>
          
    <div className="animals">
      {console.log("AnimalList: Render", animals)}      
      {
        animals.map(animal => {
                  
            return <AnimalCard key={animal.id} animal={animal} />
        })
      }
    </div>
    </>
   
  )
}