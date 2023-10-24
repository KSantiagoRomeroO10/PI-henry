import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Landing from './components/Landing/Landing'
import NavBar from './components/NavBar/NavBar'
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail'

import axios from 'axios'

function App() {

  const [drivers, setDrivers] = useState([]);

  const location = useLocation();

  const UrlBase = 'http://localhost:3001/'

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
      setDrivers(data.Drivers)
      console.log(data);
    })
    

  }
  
  useEffect(() => {
    axios.get(`${UrlBase}get/drivers`)
    .then(response => response.data)
    .then((data) => {
      setDrivers(data.Dates)
    })
  }, [])

  return (
    <>
      {
        location.pathname !== '/' && <NavBar requestByName={requestByName}/>
      }
      <Routes>
        <Route path='/' element={ <Landing/> }/>
        <Route path='/Home' element={ <Cards drivers={drivers}/> }/>
        <Route path='detail/:id' element={<Detail/>}/>
      </Routes>
    </>
  )

}

export default App;
