import './SearchName.css'

import { useState } from "react"

const SearchName = ({ requestByName }) => {

  const [name, setName] = useState('')

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return(
    <>
      <input type="text" onChange={handleChange} value={name} placeholder="Name of driver" name="buttonRequestName"/>
      <button onClick={() => { requestByName(name); setName('') }} className="buttonRequestName">Search Driver</button>
    </>
  )
}

export default SearchName