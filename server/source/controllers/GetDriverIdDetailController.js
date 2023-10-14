const Driver = require('../models/Driver');
const Team = require('../models/Team');

const axios = require('axios')

const GetDriverDetailController = async (req, res) => {
  try {
    const { idDriver } = req.params;
    
    const driver = await Driver.findByPk(idDriver, {
      include: Team,
      logging:false
    });

    const apiResponse = await axios.get(`http://localhost:5000/drivers/${idDriver}`);
    const apiDriver = apiResponse.data;

    if (!driver && !apiDriver) {
      
      return res.status(404).json({ mensaje: 'Driver no encontrado en la Base de Datos.' });
      
    }

    res.json(driver || apiDriver);
  }
  catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ mensaje: 'Driver no encontrado en la API' });
    }
  }
};

module.exports = GetDriverDetailController;
