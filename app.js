// Setup
const express = require('express');
const exphbs = require('express-handlebars');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const http = require('http');
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

/*const sequelize = new Sequelize('dsotlog', 'postgres', 'a5ac6f3e8988', {
    dialect: 'postgres',
    storage: 'LocalHost'
})*/

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// Links
app.use(express.static(path.join(__dirname, 'public')));