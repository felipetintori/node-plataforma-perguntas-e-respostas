const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const Resposta = require("./database/Resposta")

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

//order colocar ordem de ordenação do array
app.get("/",(req, res) => {
    Pergunta.findAll({raw: true, order:[
        ['id', 'DESC'] //Desc - ordem decrecente no id
    ]}).then(perguntas => {
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

//Rota pergunta filtrar pelo id da pergunta
app.get("/pergunta/:id", (req, res) => {
   var id = req.params.id; //params 'ID' passado na URL
   Pergunta.findOne({ 
       where: {id: id}
   }).then(pergunta => {
       if(pergunta != undefined){
        res.render("pergunta", {
            pergunta: pergunta
        })
       }else{
           res.redirect("/")

       }
   })
   //findOne metodo do Sequelize que te retorna apenas um registro do banco
})
//porta localhost
app.listen(8080, ()=>{
    console.log("App rodando !")
})

app.post("/responder", (req,res)=>{
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(()=>{
        res.redirect("/pergunta/" + perguntaId)
    })

})