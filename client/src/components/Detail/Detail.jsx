import './Detail.css'

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'; 


const Detail = () =>{

  const UrlBase = 'http://localhost:3001/get/drivers'

  const [driver, setDriver] = useState({})

  const {id} = useParams();  //objeto con la información de la ruta.

  useEffect(() => {
    axios(`${UrlBase}/${id}`)
    .then(response => response.data)
    .then((data) => {
       if (data) {
          setDriver(data);
       }
       else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setDriver({});
  }, [id]);
  
  let teamsString

  if (driver.teams && driver.teams.length) {
    teamsString = driver.teams.join(', ') // Convertir el array en una cadena separada por comas y espacios
  }

  return(
    <div className='container'>
      <div className='divImg'>
        <img src={driver.imagen} alt='Error no hay imagen.' className='image'/>
      </div>
      <div className='content'>
        <p><span className='title'>Id:</span> {id}</p>
        <br />
        <p><span className='title'>Forename:</span> {driver.Dates?.nombre}</p>
        <br />
        <p><span className='title'>Surname:</span> {driver?.apellido}</p>
        <br />
        <p><span className='title'>Nationality:</span> {driver?.nacionalidad}</p>
        <br />
        <p><span className='title'>Birth Date:</span> {driver?.fechaNacimiento}</p>
        <br />
        <p><span className='title'>Teams:</span> {teamsString}</p>
        <br />
        <p><span className='title'>Description:</span> {driver?.descripcion}</p>
      </div>
    </div>
  )
}

export default Detail