const express = require("express")
const app = express();

//usar EJS como renderizador de HTML
app.set('view engine', 'ejs');

//Rota principal da aplicação - vai renderizar a index dentro da pasta views
app.get("/:nome/:lang",(req, res) => {
    var nome = "Felipe Tintori"
    var lang ="JS"
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        inscritos: 8000
    });
})

//porta localhost
app.listen(8080, ()=>{
    console.log("App rodando !")
})