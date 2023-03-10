import React from 'react'
import './card.css'

const Cards = (props) => {
  return (
    <div className="card">
        <img src={props.image} alt={props.title}/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <p className="card-description">{props.description}</p>
        </div>
    </div>
  )
}

export default Cards