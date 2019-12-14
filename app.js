// Setup
const express = require('express');
const exphbs = require('express-handlebars');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const http = require('http');

// database
const db = require('./config/database');

// testdb
db.authenticate()
    .then(() => console.log('Database Connected'))
    .catch(err => console.log('Error: ' + err));

//listen
app.listen(3000, () => {
    console.log('Server listening on 3000');
})

// Routes
app.get("/", (req, res) => {
    res.render('index');
});

// Entries routes
app.use('/entries', require('./routes/entries'));

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