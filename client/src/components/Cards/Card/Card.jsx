import './Card.css'

import { NavLink } from 'react-router-dom';

const Card = ({ id, nameF, imageUrl, teams}) => {
  return(
    <NavLink to={`/detail/${id}`} className='navLink'>
      <div className='card'>
        <img src={imageUrl} alt='Error 404, not found.'/>
        <p className="info">Forename: {nameF}</p>
        <p className="info">Teams: {teams}</p>
      </div>
    </NavLink>
  )
}

export default Card