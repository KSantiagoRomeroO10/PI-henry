import './App.css';

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import Landing from './components/Landing/Landing'
import NavBar from './components/NavBar/NavBar'

import axios from 'axios'

function App() {

  const [drivers, setDrivers] = useState([]);

  const UrlBase = 'http://localhost:3001/'

  //const UrlBase1 = 'http://localhost:3001/get/drivers/' //:idDriver
  //const UrlBase2 = 'http://localhost:3001/get/name?name='
  //const UrlBase3 = 'http://localhost:3001/get/teams'
  //const UrlBase4 = 'http://localhost:3001/post/drivers'

  const requestByName = (name) => {

    if(!name){
      window.alert('Porfavor digite un nombre.')
      return
    }

    axios.get(`${UrlBase}get/name?name=${name}`)
    .then(response => response.data)
    .then((data) => {
      setDrivers(data)
    })
    
  }

  console.log(drivers);

  return (
    <>
      <Routes>
        <Route path='/' element={ <Landing/> }/>
        <Route path='/Home' element={ <NavBar requestByName={requestByName}/> }/>
      </Routes>
    </>
  )

}

export default App;
