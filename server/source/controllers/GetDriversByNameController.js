const { Op } = require('sequelize');
const Driver = require('../models/Driver');
const axios = require('axios');

const GetDriversByNameController = async (req, res) => {
  try {
    const { name } = req.query;
    
    const driversFromDB = await Driver.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${name}%`,
        },
      },
      limit: 15
    });

    const apiResponse = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);
    const apiDrivers = apiResponse.data;

    if (driversFromDB.length === 0 && apiDrivers.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron conductores con el nombre especificado.' });
    }

    res.status(200).json({ driversFromDB, apiDrivers });
  } 
  catch (error) {
    console.error('Error al obtener drivers por nombre:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor al buscar conductores por nombre.' });
  }
};

module.exports = { GetDriversByNameController };
