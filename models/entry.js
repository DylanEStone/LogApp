const Sequilize = require('sequelize');
const db = require('../config/database');

const entry = db.define('entry', {
    time: {
        type: Sequilize.INTEGER
    },
    dss: {
        type: Sequilize.INTEGER
    },
    sc: {
        type: Sequilize.INTEGER
    },
    entry_type: {
        type: Sequilize.BOOLEAN
    },
    entry: {
        type: Sequilize.STRING
    }
})

module.exports = entry;