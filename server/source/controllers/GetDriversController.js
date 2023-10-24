const Driver = require('../models/Driver')
const axios = require('axios')

const convertApiDataToModelFormat = require('../converters/converterApiToModel');

const GetDriversController = async (req, res) => {
  try {
    
    const defaultImageUrl = 'https://www.debate.com.mx/__export/1488158670038/sites/debate/img/2017/02/26/14696101163013_crop1488158525474.jpg_172596871.jpg'

    const dbResponse = await Driver.findAll()
    const apiResponse = await axios.get('http://localhost:5000/drivers')
    const apiDrivers = apiResponse.data
    const apiConvert = apiDrivers.map(driver => convertApiDataToModelFormat(driver))
    
    const drivers = [...apiConvert, ...dbResponse]

    const driversWithImages = drivers.map(driver => ({
      ...driver.dataValues,
      imagen: (!driver.imagen === 'No imagen' && driver.imagen) || defaultImageUrl
    }))

    if(drivers){
      res.status(200).json({ Dates: drivers });
    }
    else{
      res.status(404).json({ Dates: 'No hay datos.' })
    }
    
  }
  catch (error) {
    res.status(500).json({ 'Error 500:': error.message });
  }
};

module.exports = { GetDriversController };
