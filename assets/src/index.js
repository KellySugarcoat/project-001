const express = require('express');
const app = express();
const portser = 3333;

//Server
app.listen(portser, () => {
    console.log('Server on', portser);
})

//template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static("/assets"));

//app.get('/', (req, res) =>{
//    console.log('New request')
//    res.set('Content-Type', 'text/html');
//    res.send(JSON.stringify('me gustas mucho'));
//})

app.get('/', (req, res) => {
    res.render("index")
})