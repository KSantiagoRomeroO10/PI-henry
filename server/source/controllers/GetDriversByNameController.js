const { Op } = require('sequelize')
const Driver = require('../models/Driver')
const axios = require('axios')

const GetDriversByNameController = async (req, res) => {
  try {
    const { name } = req.query
    
    const driversFromDB = await Driver.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${name}%`
        }
      }
    })

    const apiResponse = await axios.get(`http://localhost:5000/drivers`);
    const apiDrivers = apiResponse.data;    

    const filteredApiDrivers = apiDrivers.filter(driver => driver.name.forename.includes(name))

    if (driversFromDB.length === 0 && filteredApiDrivers.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron conductores con el nombre especificado.' })
    }
    
    const mergeDrivers = [...driversFromDB, ...filteredApiDrivers]

    const max15 = mergeDrivers.slice(0, 15)

    res.status(200).json({"Drivers": max15})
  } 
  catch (error) {
    res.status(500).json({ 
      mensaje: 'Error interno del servidor al buscar conductores por nombre.', 
      error: error.message 
    })
  }
}

module.exports = { GetDriversByNameController }
