// Setup
var express = require('express');
var path = require('path')
var app = express();
const { Sequelize, Model, DataTypes } = require('sequelize');


class Entry extends Model {}
Entry.init({
    time: DataTypes.INTEGER,
    dss: DataTypes.INTEGER,
    sc: DataTypes.INTEGER,
    type: DataTypes.STRING,
    entry: DataTypes.STRING,
})

const sequelize = new Sequelize('dsotlog', 'postgres', 'a5ac6f3e8988', {
    dialect: 'postgres',
    storage: 'LocalHost'
})

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Routes
app.get("/", (req, res) => {
    res.render('index');
});

// Links
app.use(express.static(path.join(__dirname, 'public')));

//listen
app.listen(3000, () => {
    console.log('Server listening on 3000');
})