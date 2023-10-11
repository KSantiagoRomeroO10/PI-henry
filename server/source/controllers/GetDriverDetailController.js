const Driver = require('../models/Driver');
const Team = require('../models/Team');

const GetDriverDetailController = async (req, res) => {
  try {
    const { idDriver } = req.params; // Obtén el ID del parámetro de la URL
    // Busca el driver por ID e incluye los equipos asociados
    const driver = await Driver.findByPk(idDriver, {
      include: Team, // Esto incluirá los datos de los equipos
      logging:false
    });

    if (!driver) {
      return res.status(404).json({ mensaje: 'Driver no encontrado' });
    }

    res.json(driver);
  } catch (error) {
    console.error('Error al obtener el detalle del driver:', error);
    res.status(500).json({ 'Error 500:': error.message });
  }
};

module.exports = GetDriverDetailController;
