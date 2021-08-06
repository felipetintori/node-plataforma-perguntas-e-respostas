const express = require("express")
const app = express();

//usar EJS como renderizador de HTML
app.set('view engine', 'ejs');

//Rota principal da aplicação - vai renderizar a index dentro da pasta views
app.get("/:nome/:lang",(req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        inscritos: 8000,
        msg: exibirMsg
    });
})

//porta localhost
app.listen(8080, ()=>{
    console.log("App rodando !")
})