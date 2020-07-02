const express = require('express');
const app = express();
const  mongo = require('./js/mongo');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/databases', async (req, res) => {
  let dbs = await mongo.getDBS();
  res.send(dbs);
})


app.get('/userInfo', async (req, res) => {
  let os = require('os');
  let username =  os.userInfo().username;
  let ip = require("ip");
  res.send( username+' / address: '+ ip.address());


})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

