const path = require('path');
const express = require('express');
const app = express();

require('./src/db/mongoose');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});
