import './SearchName.css'

import { useState } from "react"

const SearchName = ({ requestByName }) => {

  const [name, setName] = useState('')

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return(
    <div className='searchName'>
      <input type="text" onChange={handleChange} value={name} placeholder="Name of driver" className="inputRequestName"/>
      <button onClick={() => { requestByName(name); setName('') }} className="buttonRequestName">Search Driver</button>
    </div>
  )
}

export default SearchName