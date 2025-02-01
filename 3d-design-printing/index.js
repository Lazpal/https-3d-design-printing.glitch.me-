const compression = require('compression');
const express = require('express');
const app = express();

app.use(compression());
app.use(express.static('public'));

app.use(express.static('public', {
    maxAge: '1y'
}));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});