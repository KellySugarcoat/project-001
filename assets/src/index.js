const express = require('express');
const app = express();
const portser = 3333;
const path = require('path');
//Server
var public = path.join(__dirname, 'assets/');


//template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/assets', express.static(public));
//app.get('/', (req, res) =>{
//    console.log('New request')
//    res.set('Content-Type', 'text/html');
//    res.send(JSON.stringify('me gustas mucho'));
//})

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(portser, () => {
    console.log('Server son', portser);
    console.log(public)
})