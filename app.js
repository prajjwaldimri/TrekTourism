const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index', { title: 'Uttarakhand Treks' });
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Site up on ${PORT}`);
});
