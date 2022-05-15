const path = require('path')
const express = require('express')
const cors = require('cors');

const livereload = require('livereload')
const liveReloadServer = livereload.createServer()

liveReloadServer.watch(path.join(__dirname, 'public'))

const connectLivereload = require('connect-livereload')

const app = express()

app.use(cors({
  origin: '*'
}));

app.use(connectLivereload())

app.use(express.static('public'))

app.listen(9999, '0.0.0.0', function () {
  console.log(`Listening on 0.0.0.0:9999`)
});
