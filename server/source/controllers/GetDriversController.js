const Driver = require('../models/Driver')
const axios = require('axios')

const GetDriversController = async (req, res) => {
  try {
    
    const defaultImageUrl = 'https://www.debate.com.mx/__export/1488158670038/sites/debate/img/2017/02/26/14696101163013_crop1488158525474.jpg_172596871.jpg'

    const drivers = await Driver.findAll({logging:false})
    
    const driversWithImages = drivers.map(driver => ({
      ...driver.dataValues,
      imagen: (!driver.imagen === 'No imagen' && driver.imagen) || defaultImageUrl
    }))

    const apiResponse = await axios.get('http://localhost:5000/drivers')
    const apiDrivers = apiResponse.data

    const addDefaultImageIfMissing = (driver) => {
      if (!driver.image || !driver.image.url) {
        return {
          ...driver,
          image: {
            url: defaultImageUrl,
            imageby: 'Default Image'
          }
        }
      }
      return driver;
    }

    const apiDriversWithImages = apiDrivers.map(addDefaultImageIfMissing)

    if(drivers.length == 0 && apiDrivers.length == 0){

      res.status(404).json({ Api: 'No hay datos.', "Base de datos": 'No hay datos.' })

    }
    else if(drivers.length > 0 && apiDrivers.length > 0){
  
      res.status(200).json({Api: apiDriversWithImages, 'Base de datos': driversWithImages});

    }
    else if(drivers.length == 0 && apiDrivers.length > 0){
  
      res.status(200).json({Api: apiDriversWithImages, 'Base de datos': 'Vacia'});

    }
    else if(drivers.length > 0 && apiDrivers.length == 0){

      res.status(200).json({Api: 'Vacia', 'Base de datos': driversWithImages});
      
    }

  }
  catch (error) {
    console.error('Error al recuperar drivers:', error);
    res.status(500).json({ 'Error 500:': error.message});
  }
};

module.exports = { GetDriversController };
