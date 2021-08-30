const Sequelize = require('sequelize');

//conexão com o banco de dados

const connection = new Sequelize('guiaperguntas', 'root', '578tyh66A!',{
    host: 'localhost',
    dialect: 'mysql'
});


//Exportantdo a conexão para usar em outros arquivos
module.exports = connection