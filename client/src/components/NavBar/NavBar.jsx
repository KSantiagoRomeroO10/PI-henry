import './NavBar.css'

import SearchName from './SearchName/SearchName'
import { NavLink } from 'react-router-dom';

const Navbar = ({ requestByName }) => {

  return (
    <header className='navBar'>
        <NavLink to={`/home`} className='navLink'>              
          <h1 className='name'>Santiago Romero</h1>
        </NavLink>
        <SearchName requestByName={requestByName}/>
    </header>
  )
  
}

export default Navbar