
const typeorm = require('typeorm'); // Importando a biblioteca typeorm
let datasource = null;              // Variável que irá armazenar a conexão com o banco de dados

// Função que irá retornar o Banco, se não existir, irá criar um novo
const database = () => {

    // Função que irá inicializar o banco de dados
    const init = async () => {
        if (datasource !== null) {
            return;
        };

        datasource = new typeorm.DataSource({
            type: "sqlite",
            database: "./db.sqlite",
            synchronize: true,
            migrations: ["./migrations/*.js"],
            entities: [require("./entity/user.entity.js")] 
        });
        
        await datasource.initialize();
    };

    // Função que irá retornar o banco de dados
    const getDatasource = () => {
        return datasource;
    };

    return {
        init,
        getDatasource
    };
};

module.exports = {
    database
};