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

app.get("/index", (req, res) => {
    res.render("index")
});

app.get("/galeria", (req, res) => {
    res.render("galeria")
});

app.get("/cantida", (req, res) => {
    res.render("cantida")
});

app.get("/contactanos", (req, res) => {
    res.render("contactanos")
});

app.get("/loginams", (req, res) => {
    res.render("loginams")
});

app.get("/nosotros", (req, res) => {
    res.render("nosotros")
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

const testGalerry = [
    {
        desc: 'IRELIA ES REINA',
        pic: 'https://i.pinimg.com/originals/2c/36/d1/2c36d1ab84a3d178a7de6e7789f5b727.jpg'
    },
    {
        desc: 'TEEMO ES CUTE',
        pic: 'https://esports.as.com/2018/05/01/league-of-legends/Beemo-Pulso-Fuego-League-Legends_1131796817_70275_1024x576.jpg'
    },
    {
        desc: 'mh ah mh mh uh ah',
        pic: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg'
    },
]

app.get('/test', (req, res) => res.render('TestView', { user: userFromDatabase }))

app.listen(portser, () => {
    console.log('Server son', portser);
    console.log(public)
})