const express = require('express');
const app = express();
const portser = 3333;

//Server


app.listen(portser, () => {
    console.log('Server on', portser);
})

app.get('/', (req, res) =>{
    res.send('hi uwu')
})