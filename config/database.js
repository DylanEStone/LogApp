const Sequelize = require('sequelize');

module.exports = new Sequelize('LogDB', 'postgres', 'a5ac6f3e8988', {
    host: 'localhost',
    dialect: 'postgres',
    opetatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});