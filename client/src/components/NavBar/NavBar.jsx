import './NavBar.css'

import SearchName from './SearchName/SearchName'

const Navbar = ({ requestByName }) => {

  return (
    <>
      <header>
        <h1>Santiago Romero</h1>
        <SearchName requestByName={requestByName}/>
      </header>
    </>
  )
  
}

export default Navbar