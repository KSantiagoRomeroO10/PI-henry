import './Card.css'

import { NavLink } from 'react-router-dom';

const Card = ({ id, name, image, teams}) => {
  const teamsString = teams.join(', ');
  return(
    <NavLink to={`/detail/${id}`} className='navLink'>
      <div className='card'>
        <img src={image} alt='Error 404, not found.'/>
        <p className="info">Forename: {name}</p>
        <p className="info">Teams: {teamsString}</p>
      </div>
    </NavLink>
  )
}

export default Card