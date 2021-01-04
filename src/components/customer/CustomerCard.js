import React from "react"
import "./customer.css"

export const CustomerCard = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">Customer Name: {customer.name}</h3>
        <div className="customer__address">Customer Address: {customer.address}</div>
        <div className="customer__email">Customer Email: {customer.email}</div>
    </section>
)