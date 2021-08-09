const express = require("express")
const app = express();

//usar EJS como renderizador de HTML
app.set('view engine', 'ejs');

//Rota principal da aplicação - vai renderizar a index dentro da pasta views
app.get("/",(req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca cola", preco: 5},
        {nome: "Leite", preco: 1.14}
    ]
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
})

//porta localhost
app.listen(8080, ()=>{
    console.log("App rodando !")
})