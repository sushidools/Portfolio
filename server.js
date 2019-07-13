const parser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

require('./server/config/database');

app.use(express.static(__dirname + '/public/dist/public'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// app.use(require('./server/routes'));
app.all('*', (req, res, next) => {
  res.sendFile(path.resolve('./public/dist/public/index.html'));
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));