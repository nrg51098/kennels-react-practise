import React from "react"
import "./location.css"

export const LocationCard = ({location}) => (
    <section className="location">
        <h3 className="location__name">Location Name:{location.name}</h3>
        <div className="location__address">Location Address: {location.address}</div>
    </section>
)