const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const connection = require('./database/database')

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
    res.render("index");
});


app.get("/perguntar",(req, res) =>{
    res.render("perguntar")
})

app.post("/salvarpergunta",(req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao
    res.send("Formulário Recebido: Titulo " + titulo + " " + "descrção " + descricao)
})
//porta localhost
app.listen(8080, ()=>{
    console.log("App rodando !")
})