
const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "AccountType",               // Nome que vincula a entidade e a tabela
    tableName: "accountTypes",   
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        type: {
            type: "varchar",
        },
    },
})