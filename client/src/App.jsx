import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Landing from './components/Landing/Landing'
import NavBar from './components/NavBar/NavBar'
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'

import axios from 'axios'

function App() {

  const [drivers, setDrivers] = useState([]);

  const location = useLocation();

  const UrlBase = 'http://localhost:3001/'

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
        <Route path='/home' element={ <Cards drivers={drivers}/> }/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </>
  )

}

export default App;
