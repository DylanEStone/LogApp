// Setup
var express = require('express');
var path = require('path')
var app = express();

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