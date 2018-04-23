const express = require('express');
const app = express();
const router = require('./routers');
const bodyParser = require('body-parser');


//VIEW ENGINE
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)



//LISTENING ON PORT

app.listen('3000', function () {
  console.log('listening on port 3000');
})
