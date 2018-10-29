let express = require('express');
let app = module.exports = express();

app.get('/items', function (req, res) {
    res.send('list of all items');
});