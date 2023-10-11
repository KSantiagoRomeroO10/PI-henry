const Driver = require('../models/Driver');

const GetDriversController = async (req, res) => {
  try {
    const drivers = await Driver.findAll({logging:false});
    const defaultImageUrl = 'default_image_url_here';

    if (drivers.length === 0) {
      res.status(404).json({ mensaje: 'No hay datos' });
    }
    else{
      const driversWithImages = drivers.map(driver => ({
        ...driver.dataValues,
        imagen: driver.imagen || defaultImageUrl,
      }));
  
      res.status(200).json(driversWithImages);
    }
  }
  catch (error) {
    console.error('Error al recuperar drivers:', error);
    res.status(500).json({ 'Error 500:': error.message});
  }
};

module.exports = { GetDriversController };
