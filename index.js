const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/checkout', (req, res) => {
    res.json({'name': 'john smith', 'age': 12, 'nationallity': 'french'});
})

const port = process.env.PORT || 3000;

app.listen(port);
