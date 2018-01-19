import React from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {
  return (
    <div className="col-sm-4">
      <div className="card" style={{width: '23rem'}}>
        <img className="card-img-top" src={props.url}></img>
          <div className="card-block">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.description.substring(0,100)}</p>
            <Link to={`details/${props.id}`} className="btn btn-primary" role="button">details</Link>
          </div>
      </div>
    </div>
  )
}

export default Card
