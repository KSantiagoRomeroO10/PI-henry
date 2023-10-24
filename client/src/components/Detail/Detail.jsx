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
  
  console.log(driver);

  return(
    <div className='container'>
      <div className='divImg'>
        <img src={driver.image?.url} alt='Error no hay imagen.' className='image'/>
      </div>
      <div className='content'>
        <p><span className='title'>Id:</span> {id}</p>
        <br />
        <p><span className='title'>Forename:</span> {driver['name']?.['forename']}</p>
        <br />
        <p><span className='title'>Surname:</span> {driver['name']?.['surname']}</p>      {/* chining operator */}
        <br />
        <p><span className='title'>Nationality:</span> {driver?.['nationality']}</p>
        <br />
        <p><span className='title'>Birth Date:</span> {driver?.['dob']}</p>
        <br />
        <p><span className='title'>Teams:</span> {driver?.['teams']}</p>
        <br />
        <p><span className='title'>Description:</span> {driver?.['description']}</p>
      </div>
    </div>
  )
}

export default Detail