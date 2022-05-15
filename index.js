const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors({
  origin: '*'
}));

app.use(express.static('public'))

app.listen(9999, '0.0.0.0', function () {
  console.log(`Listening on 0.0.0.0:9999`)
});