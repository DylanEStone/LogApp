const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Sequelize = require('sequelize');
const Entry = require('../models/entry');

// get entry list
router.get('/', (req, res) =>
    Entry.findAll()
    .then(entries => {
        console.log(entries)
        res.sendStatus(200)
    })
    .catch(err => console.log(err)));

// display add entry from
//router.get('/add', (req, res) => res.render('add'));

// add an entry
router.get('/add', (req, res) => {
    const data = {
        time: 2000,
        dss: 43,
        sc: 32,
        enttype: false,
        entry: 'GAP OCC'
    }
    let { time, dss, sc, enttype, entry } = data;

    //insert into table
    Entry.create({
            time,
            dss,
            sc,
            enttype,
            entry
        })
        .then(entry => res.redirect('/entries'))
        .catch(err => console.log(err));
});


module.exports = router;