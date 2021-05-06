const express = require('express');
const app = express();
const portser = 3333;

//Server


app.listen(portser, () => {
    console.log('Server on', portser);
})

app.get('/', (req, res) =>{
    res.set('Content-Type', 'text/html');
    res.send(JSON.stringify('me gustas mucho'));
})