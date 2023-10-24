function convertApiDataToModelFormat(apiData) {
  const {
    id,
    name: { forename: nombre, surname: apellido },
    image: { url: imagen },
    dob: fechaNacimiento,
    nationality: nacionalidad,
    description: descripcion,
    teams
  } = apiData

  let teamsArray = []
  if (teams && teams.includes(',')) {
    teamsArray = teams.split(',').map(team => team.trim()) // Convertir la cadena de equipos en un array de equipos
  }
  else if (teams) {
    teamsArray.push(teams.trim()) // Agregar el único equipo a la lista de equipos
  }

  return {
    id,
    nombre,
    apellido,
    descripcion,
    imagen,
    nacionalidad,
    fechaNacimiento,
    teams: teamsArray
  };
}

module.exports = convertApiDataToModelFormat
