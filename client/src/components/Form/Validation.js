const validateString = (string) => {
  const regex = /^[a-zA-Z\s]*$/
  return regex.test(string)
}

const validateTeams = (teams) => {
  const regex = /^[a-zA-Z0-9\s,]*$/
  return regex.test(teams)
}


export { validateString, validateTeams }