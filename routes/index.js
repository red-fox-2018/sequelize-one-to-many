const db = require('../models')
const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Home Page')
})

module.exports = router