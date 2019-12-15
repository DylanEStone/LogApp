// Setup
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

// database
const db = require('./config/database');

// testdb
db.authenticate()
    .then(() => console.log('Database Connected'))
    .catch(err => console.log('Error: ' + err));

const app = express();

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

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





// Links
app.use(express.static(path.join(__dirname, 'public')));