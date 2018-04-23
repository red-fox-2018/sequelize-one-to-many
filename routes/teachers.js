const express = require('express');
const router = express();
const Model = require('../models')

Model.Teacher.findAll().then(teachers=>{
    router.get('/', (req, res) => {
        res.render('subjects',{teachers})
    })
})


module.exports = router