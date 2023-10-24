const { Op } = require('sequelize')
const Driver = require('../models/Driver')
const axios = require('axios')
const convertApiDataToModelFormat = require('../converters/converterApiToModel');

const GetDriversByNameController = async (req, res) => {
  try {
    const { name } = req.query
    const defaultImageUrl = 'https://www.debate.com.mx/__export/1488158670038/sites/debate/img/2017/02/26/14696101163013_crop1488158525474.jpg_172596871.jpg'
    
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

    const driversWithImages = filteredApiDrivers.map(driver => {
      if (driver.imagen && driver.imagen !== 'No imagen' && driver.imagen !== "") {
        return {
          ...driver,
          imagen: driver.imagen
        };
      } else {
        return {
          ...driver,
          imagen: defaultImageUrl
        };
      }
    });
    

    if (driversFromDB.length === 0 && driversWithImages.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron conductores con el nombre especificado.' })
    }
    
    const mergeDrivers = []

    const minLength = Math.min(driversFromDB.length>driversWithImages.length)

    for (let i = 0; i < minLength; i++) {
      mergeDrivers.push(driversFromDB[i]);
      mergeDrivers.push(driversWithImages[i]);
    }

    // Agregar los elementos restantes de driversFromDB si su longitud es mayor que la de driversWithImages
    for (let i = minLength; i < driversFromDB.length; i++) {
      mergeDrivers.push(driversFromDB[i]);
    }

    // Agregar los elementos restantes de driversWithImages si su longitud es mayor que la de driversFromDB
    for (let i = minLength; i < driversWithImages.length; i++) {
      mergeDrivers.push(driversWithImages[i]);
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
