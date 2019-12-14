const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Entry = require('../models/entry')

// get entry list
router.get('/', (req, res) =>
    Entry.findAll()
    .then(entries => {
        console.log(entries)
        res.sendStatus(200)
    })
    .catch(err => console.log(err)));

// add an entry
router.get('/add', (req, res) => {
    const data = {
        time: 2000,
        dss: 43,
        sc: 32,
        entry_type: false,
        entry: 'GAP OCC'
    }
    let { time, dss, sc, entry_type, entry } = data

    //insert into table
    Entry.create({
            time,
            dss,
            sc,
            entry_type,
            entry
        })
        .then(entry => res.redirect('entries'))
        .catch(err => console.log(err));
});


module.exports = router;