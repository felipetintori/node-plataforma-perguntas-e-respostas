const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')

//Databese
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão com o banco")
    })
    .catch((erro) => {
        console.log(erro)
    })

//usar EJS como renderizador de HTML
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rota principal da aplicação - vai renderizar a index dentro da pasta views
app.get("/",(req, res) => {
    Pergunta.findAll({raw: true}).then(perguntas => {
        res.render("index",{
            perguntas: perguntas
        });
    })
    
});


app.get("/perguntar",(req, res) =>{
    res.render("perguntar")
})

app.post("/salvarpergunta",(req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect("/")
    })
})
//porta localhost
app.listen(8080, ()=>{
    console.log("App rodando !")
})