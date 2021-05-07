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

app.get("/views", (req, res) => {
    res.render("cantida")
});

//PASANDO DATOS A UNA VISTA

//datos de prueba
const userFromDatabase = {
    isLoggedIn: true,
    name: 'Catalina',
    lastname: 'Fernandez',
    age: 18,
    isMarried: true,
    hobbies: ['Pasar tiempo con el uwu', 'LOL', 'stress']
}

app.get('/test', (req, res) => res.render('TestView', { user: userFromDatabase }))

app.listen(portser, () => {
    console.log('Server son', portser);
    console.log(public)
})