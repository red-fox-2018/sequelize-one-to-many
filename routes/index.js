const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('../views/apps.ejs')
})


module.exports = router
