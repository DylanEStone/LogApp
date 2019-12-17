const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Entry = require('../models/entry');
const Sequelize = require('sequelize');

// get entry list
router.get('/', (req, res) =>
    Entry.findAll()
    .then(entries => res.render('entries', {
        entries
    }))
    .catch(err => console.log(err)));

// Display add entry form
router.get('/add', (req, res) => res.render('add'));

// add an entry
router.post('/add', (req, res) => {
    let { time, dss, sc, entry_type, entry } = req.body;
    let errors = [];

    if (!time) {
        errors.push({ text: 'Please add the time' })
    }
    if (!dss) {
        errors.push({ text: 'Please add the dss' })
    }
    if (!sc) {
        errors.push({ text: 'Please add the spacecraft' })
    }
    if (!entry) {
        errors.push({ text: 'Please add an entry' })
    }

    // Check for errors
    if (errors.length > 0) {
        res.render('add', {
            errors,
            time,
            dss,
            sc,
            entry_type,
            entry
        });
    } else {
        //insert into table
        Entry.create({
                time,
                dss,
                sc,
                entry_type,
                entry
            })
            .then(entry => res.redirect('/entries/add'))
            .catch(err => console.log(err));
    }
});


module.exports = router;