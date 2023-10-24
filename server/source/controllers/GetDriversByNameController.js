const { Op } = require('sequelize')
const Driver = require('../models/Driver')
const axios = require('axios')
const convertApiDataToModelFormat = require('../converters/converterApiToModel');

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
    const apiDriversDates = apiResponse.data;    
    const apiDrivers = apiDriversDates.map(driver => convertApiDataToModelFormat(driver))

    const filteredApiDrivers = apiDrivers.filter(driver => driver.nombre.includes(name))

    if (driversFromDB.length === 0 && filteredApiDrivers.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron conductores con el nombre especificado.' })
    }
    

    const mergeDrivers = [] //...driversFromDB, ...filteredApiDrivers

    const minLength = Math.min(driversFromDB.length>filteredApiDrivers.length)

    for (let i = 0; i < minLength; i++) {
      mergeDrivers.push(driversFromDB[i]);
      mergeDrivers.push(filteredApiDrivers[i]);
    }

    // Agregar los elementos restantes de driversFromDB si su longitud es mayor que la de filteredApiDrivers
    for (let i = minLength; i < driversFromDB.length; i++) {
      mergeDrivers.push(driversFromDB[i]);
    }

    // Agregar los elementos restantes de filteredApiDrivers si su longitud es mayor que la de driversFromDB
    for (let i = minLength; i < filteredApiDrivers.length; i++) {
      mergeDrivers.push(filteredApiDrivers[i]);
    }

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
