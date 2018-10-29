let express = require('express');
let app = express();

let api = require('./api');

app.use(api);

app.listen(5566);
console.log('Listening on port 5566');