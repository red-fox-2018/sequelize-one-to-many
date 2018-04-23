const router = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const db = require('../models');
const Teacher = db.Subject;

router.get('/', function (res, req) {
  res.render('/subjects');
});

router.get('/subjects', function (res, req) {
  
});


module.exports = router;