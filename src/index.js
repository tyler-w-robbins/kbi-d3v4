var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname) + '/views/index.html'); // Load main view here
});

app.listen(8080, function () {
  console.log('Application running on port 8080!');
});
