const validateName = (name) => {
  const regex = /^[a-zA-Z\s]*$/
  return regex.test(name)
};

const validateTeams = (teams) => {
  const regex = /^[a-zA-Z0-9\s,]*$/;
  return regex.test(teams)
};

export { validateName, validateTeams }