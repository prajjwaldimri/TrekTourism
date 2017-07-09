const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  console.log(req);
  res.render('index', { title: 'Trekking' });
});

app.listen(3000, function () {
  console.log('Site up on port 3000');
});
