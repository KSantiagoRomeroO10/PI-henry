import './SearchName.css'

import { useState } from "react"

import { NavLink } from 'react-router-dom';

const SearchName = ({ requestByName }) => {

  const [name, setName] = useState('')

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return(
    <div className='searchName'>
      <input type="text" onChange={handleChange} value={name} placeholder="Name of driver" className="inputRequestName"/>
      <NavLink to={`/home`}>
        <button onClick={() => { requestByName(name); setName('') }} className="buttonRequestName">Search Driver</button>
      </NavLink>
    </div>
  )
}

export default SearchName