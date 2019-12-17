// Setup
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

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

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

// Entry routes
app.use('/entries', require('./routes/entries'));

//listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));