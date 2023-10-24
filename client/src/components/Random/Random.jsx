// DriverComponent.js
import './Random.css'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { randomCard } from '../../redux/actions'

const DriverComponent = ({ drivers, error, randomCard }) => {
  
  useEffect(() => {
    randomCard()
  }, [randomCard])

  if (error) {
    return <div>Error: {error}</div>
  }

  console.log(drivers);
  const randomDriver = drivers ? drivers : null
  const teams = randomDriver.teams && randomDriver.teams.length > 0 ? randomDriver.teams.join(', ') : '';

    return (
    <div>
      {randomDriver && (        
        <div className='card'>
          <h2>{randomDriver.nombre} {randomDriver.apellido}</h2>
          <br />
          <img src={randomDriver.imagen} alt={`${randomDriver.nombre} ${randomDriver.apellido}`} />
          <br />
          <p>Nacionalidad: {randomDriver.nacionalidad}</p>
          <br />
          <p>Fecha de nacimiento: {randomDriver.fechaNacimiento}</p>
          <br />
          <p>Equipos: {teams}</p>
          <br />
          <p>{randomDriver.descripcion}</p>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  drivers: state.drivers,
  error: state.error
})

const mapDispatchToProps = {
  randomCard
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverComponent)
