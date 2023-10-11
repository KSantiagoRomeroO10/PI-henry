const sequelize = require('./Connection');
const Driver = require('./Driver');
const Team = require('./Team');

Driver.belongsToMany(Team, { through: 'DriverTeam' });
Team.belongsToMany(Driver, { through: 'DriverTeam' });

module.exports = { sequelize, Driver, Team};
