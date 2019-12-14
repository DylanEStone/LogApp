// Setup
const express = require('express');
const exphbs = require('express-handlebars');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const http = require('http');
const Sequelize = require('sequelize');

const db = new Sequelize('LogDB', 'postgres', 'a5ac6f3e8988', {
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

// testdb
db.authenticate()
    .then(() => console.log('Database Connected'))
    .catch(err => console.log('Error: ' + err));

// for logging requests to console
app.use(logger('dev'));
//parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//listen
app.listen(3000, () => {
    console.log('Server listening on 3000');
})

// Routes
app.get("/", (req, res) => {
    res.render('index');
});

//const { Sequelize, Model, DataTypes } = require('sequelize');


/*class Entry extends Model {}
Entry.init({
    time: DataTypes.INTEGER,
    dss: DataTypes.INTEGER,
    sc: DataTypes.INTEGER,
    type: DataTypes.STRING,
    entry: DataTypes.STRING,
})*/

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// Links
app.use(express.static(path.join(__dirname, 'public')));