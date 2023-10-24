import './Form.css'

import React, { useState } from 'react'
import axios from 'axios'

import { validateName, validateTeams } from './Validation'

const Form = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [imagen, setImagen] = useState('')
  const [nacionalidad, setNacionalidad] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [teams, setTeams] = useState([])

  const [nameError, setNameError] = useState('')
  const [teamsError, setTeamsError] = useState('')

  const handleNameChange = (e) => {
    const name = e.target.value
    if (!validateName(name)) {
      setNameError('Solo se aceptan letras en el nombre')
    } else {
      setNameError('')
    }
    setNombre(name)
  }

  const handleTeamsChange = (e) => {
    const teams = e.target.value
    if (!validateTeams(teams)) {
      setTeamsError('Solo se aceptan letras, números y comas para separar los equipos')
    } else {
      setTeamsError('')
    }
    setTeams(teams.split(',').map((team) => team.trim()))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDriverData = {
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fechaNacimiento,
      teams
    };

    try {
      const response = await axios.post('http://localhost:3001/post/drivers', newDriverData)
      console.log(response.data)
    } 
    catch (error) {
      console.error(error)
    }

  };

  const reiniciar = () => {
    setNombre('')
    setApellido('')
    setDescripcion('')
    setImagen('')
    setNacionalidad('')
    setFechaNacimiento('')
    setTeams([])
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={handleNameChange}
        />
        {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        <br />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Imagen URL"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Nacionalidad"
          value={nacionalidad}
          onChange={(e) => setNacionalidad(e.target.value)}
        />
        <br />
        <input
          type="date"
          placeholder="Fecha de Nacimiento"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Teams: equipo1,equipo2"
          value={teams}
          onChange={handleTeamsChange}
        />
        {teamsError && <p style={{ color: 'red' }}>{teamsError}</p>}
        <br />
        <button type="submit">Agregar Conductor</button>
      </form>
      <button type="submit" className='reiniciar' onClick={() => {reiniciar()}}>Reiniciar</button>
    </>
  );
};

export default Form;
