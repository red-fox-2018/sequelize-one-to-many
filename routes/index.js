var express = require('express')
var router = express.Router();
const model = require('../models');

router.get('/', (req, res) => {
  res.render('../views')
})

module.exports = router
