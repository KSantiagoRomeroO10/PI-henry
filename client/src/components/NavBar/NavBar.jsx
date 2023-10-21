import './NavBar.css'

import SearchName from './SearchName/SearchName'

const Navbar = ({ requestByName }) => {

  return (
    <header className='navBar'>
        <h1 className='name'>Santiago Romero</h1>
        <SearchName requestByName={requestByName}/>
    </header>
  )
  
}

export default Navbar