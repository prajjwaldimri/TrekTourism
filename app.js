const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index', { title: 'Uttarakhand Treks' });
});

app.listen(3000, function () {
  console.log('Site up on port 3000');
});
