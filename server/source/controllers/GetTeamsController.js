const axios = require('axios')
const { Team } = require('../models/Index')

const GetTeamsController = async (req, res) => {
  try {

    const dbTeam = await Team.findAll()

    const apiResponse = await axios.get('http://localhost:5000/drivers')
    const apiDrivers = apiResponse.data

    // Buscar todos los equipos de la api y guardarlos en un array sin repetirlos 

    const apiTeams = []

    let aux = ''

    for(let i = 0; i < apiDrivers.length; i++){
      aux = apiDrivers[i].teams
      if(aux){
        aux = aux.split(',')
        aux.forEach(team => {
          apiTeams.push(team)
        })
      }
    }

    const apiTeamsRepeat = [...new Set(apiTeams)]

    // si no hay nada en la base de datos vamos a registarlos
    
    if(dbTeam.length === 0){

      for(const nombreEquipo of apiTeamsRepeat) {
        await Team.create({ nombre: nombreEquipo });
      }

    }

    // Si hay existen registros en la base de datos, va a compararlos con el array de teams que sacamos de la api
    // y si no existe el equipo, api vs db, entonces registra ese equipo

    if(dbTeam.length > 0){

      for(const nombreEquipo of apiTeamsRepeat) {

        const team = await Team.findOne({ where: { nombre: nombreEquipo }, });
        if(!team){
          await Team.create({ nombre: nombreEquipo });
        }
        
      }

    }

    const newDBTeam = await Team.findAll()

    res.status(200).json({ 'Teams': newDBTeam })

  }
  catch (error) {
    res.status(500).json({ mensaje: 'Error interno del servidor al obtener equipos.', error: error.message });
  }
};

module.exports = { GetTeamsController };
