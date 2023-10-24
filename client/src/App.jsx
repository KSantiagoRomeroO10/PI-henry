import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Landing from './components/Landing/Landing'
import NavBar from './components/NavBar/NavBar'
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail'

import axios from 'axios'

function App() {

  const [driversByName, setDriversByName] = useState([]);
  const [drivers, setDrivers] = useState([]);

  console.log(driversByName);

  const location = useLocation();

  const UrlBase = 'http://localhost:3001/'

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
      setDriversByName(data)
    })
    
  }
  
  useEffect(() => {
    axios.get(`${UrlBase}get/drivers`)
    .then(response => response.data)
    .then((data) => {
      if(data['Api'] !== 'Vacia' && data['Base de datos'] !== 'Vacia'){
        data = [...data['Api'], ...data['Base de datos']]
      }
      else if(data['Api'] !== 'Vacia' && data['Base de datos'] === 'Vacia'){
        data = data['Api']
      }
      else if(data['Api'] === 'Vacia' && data['Base de datos'] !== 'Vacia'){
        data = data['Base de datos']
      }
      else if(data['Api'] === 'Vacia' && data['Base de datos'] === 'Vacia'){
        data = []
      }
      setDrivers(data)
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
