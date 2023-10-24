import './Form.css'

import React, { useState } from 'react'
import axios from 'axios'

import { validateString, validateTeams } from './Validation'

const Form = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [imagen, setImagen] = useState('')
  const [nacionalidad, setNacionalidad] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [teams, setTeams] = useState([])

  const [nameError, setNameError] = useState('')
  const [apellidoError, setApellidoError] = useState('')
  const [nacionalidadError, setNacionalidadError] = useState('')
  const [teamsError, setTeamsError] = useState('')

  const [resp, setresp] = useState('')
  const [faltanEspa, setFaltanEspa] = useState('')

  const handleApellidoChange = (e) => {
    const name = e.target.value
    if (!validateString(name)) {
      setApellidoError('Solo se aceptan letras en el nombre')
    } 
    else {
      setApellidoError('')
    }
    setApellido(name)
  }

  const handleNameChange = (e) => {
    const apellido = e.target.value
    if (!validateString(apellido)) {
      setNameError('Solo se aceptan letras en el nombre')
    } 
    else {
      setNameError('')
    }
    setNombre(apellido)
  }

  const handleNacionalidadChange = (e) => {
    const nacionalidad = e.target.value
    if (!validateString(nacionalidad)) {
      setNacionalidadError('Solo se aceptan letras en la nacionalidad')
    } 
    else {
      setNacionalidadError('')
    }
    setNacionalidad(nacionalidad)
  }

  const handleTeamsChange = (e) => {
    const teams = e.target.value
    if (!validateTeams(teams)) {
      setTeamsError('Solo se aceptan letras, números y comas para separar los equipos')
    } 
    else {
      setTeamsError('')
    }
    setTeams(teams.split(',').map((team) => team.trim()))
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(nombre && apellido && descripcion && imagen && nacionalidad && fechaNacimiento && teams){

      const newDriverData = {
        nombre,
        apellido,
        descripcion,
        imagen,
        nacionalidad,
        fechaNacimiento,
        teams
      }
  
      try {
        const response = await axios.post('http://localhost:3001/post/drivers', newDriverData)
        setresp(response.data)
        reiniciar()
        setTimeout(() => {
          setresp('');
        }, 4000)
      } 
      catch (error) {
        console.error(error)
      }

    }
    else{
      setFaltanEspa('Todos los campos no esta llenos, por favor rellene todo el formulario')
      setTimeout(() => {
        setFaltanEspa('')
      }, 4000)
    }

  }

  const reiniciar = () => {
    setNombre('')
    setApellido('')
    setDescripcion('')
    setImagen('')
    setNacionalidad('')
    setFechaNacimiento('')
    setTeams([])

    setNameError('')
    setApellidoError('')
    setNacionalidadError('')
    setTeamsError('')

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
          onChange={handleApellidoChange}
        />
        {apellidoError && <p style={{ color: 'red' }}>{apellidoError}</p>}
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
          onChange={handleNacionalidadChange}
        />
        {nacionalidadError && <p style={{ color: 'red' }}>{nacionalidadError}</p>}
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
        {resp && <p style={{ color: 'green' }}>{resp.mensaje}</p>}
        {faltanEspa && <p style={{ color: 'red' }}>{faltanEspa}</p>}
      </form>
      <button type="submit" className='reiniciar' onClick={() => {reiniciar()}}>Reiniciar</button>
    </>
  );
};

export default Form;
