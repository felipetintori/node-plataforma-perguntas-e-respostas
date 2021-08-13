const express = require("express")
const app = express();

//usar EJS como renderizador de HTML
app.set('view engine', 'ejs');
app.use(express.static('public'))

//Rota principal da aplicação - vai renderizar a index dentro da pasta views
app.get("/",(req, res) => {
    res.render("index");
});

app.get("/perguntar",(req, res) =>{
    res.render("perguntar")
})

//porta localhost
app.listen(8080, ()=>{
    console.log("App rodando !")
})