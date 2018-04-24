const express = require("express")
var router = express.Router()
var bodyParser = require('body-parser')
var model = require ('../models')


router.get('/errorpage',function(req,res){
    res.render('error')
})

module.exports=router