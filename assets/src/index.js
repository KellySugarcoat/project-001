const express = require('express');
const app = express();
const portser = 3333;
const path = require('path');
//Server
var public = path.join(__dirname, 'assets/');
const fileUpload = require('express-fileupload');

//template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/assets', express.static(public));

app.use(fileUpload());

app.get('/', (req, res) => {
    res.render("index")
})

app.get("/index", (req, res) => {
    res.render("index")
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

//pivot render
app.get("/galeria", (req, res) => {
    res.render('galeria', {images: testGallery})
});

app.get("/market", (req, res) => {
    res.render('market', {imag: testmerch})
});

app.get("/vids", (req, res) => {
    res.render('vids', {videos: testVidGallery})
});

app.get("/post", (req, res) => {
    res.render('post')
});

//datos de prueba
const userFromDatabase = {
    isLoggedIn: true,
    name: 'Catalina',
    lastname: 'Fernandez',
    age: 18,
    isMarried: true,
    hobbies: ['Pasar tiempo con el uwu', 'LOL', 'stress']
}
//-----------------------------------
//img gallery array -predatabase
const testGallery = [
    {
        desc: 'IRELIA ES REINA',
        pic: 'https://i.pinimg.com/originals/2c/36/d1/2c36d1ab84a3d178a7de6e7789f5b727.jpg',
        date: '11/05/2020',
        title: 'Irelia'
    },
    {
        desc: 'TEEMO ES CUTE',
        pic: 'https://esports.as.com/2018/05/01/league-of-legends/Beemo-Pulso-Fuego-League-Legends_1131796817_70275_1024x576.jpg',
        date: '11/05/2020',
        title: 'Teemo'
    },
    {
        desc: 'mh ah mh mh uh ah',
        pic: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg',
        date: '11/05/2020',
        title:'Malphite'
    },
]

//vid array -predatabase
const testVidGallery = [
    {
        descrip: 'Caution! this video is a demo of the code',
        vid: 'https://www.youtube.com/watch?v=wfH_76IUvBc',
    },
]

//merch array -predatabase

const testmerch = [
    {
        obj:'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80',
        des:'Lorem ipsum at dolore',
        price:'USD:999',
    },
]

app.get('/test', (req, res) => res.render('TestView', { user: userFromDatabase }))
app.get('/Gallery', function(request, response) {
    response.render('Gallery', {images: testGallery})
})
app.listen(portser, () => {
    console.log('Server son', portser);
    console.log(public)
})

//UploadFunction
app.post('', (req, res) => {
    let SumbitFile;
    let uploadPath;

    if(!req.files|| Object.keys(req.files).length    === 0){
        return res.status(400).send('No files were uploaded');
    }
    //name of the input is SumbitFile
    SumbitFile = req.files.SumbitFile;
    uploadPath= __dirname + '/img/Uploads/'
    console.log(SumbitFile);

    //mv place the file on the server
    SumbitFile.mv(uploadPath, function(err) {
        if(err) return res.status(500).send(err);
    
    res.send('Upload Succes!');
    
    });
});