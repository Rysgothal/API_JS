
const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "User",               // Nome que vincula a entidade e a tabela
    tableName: "users",   
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        nameUser: {
            type: "varchar",
        },
        profileName: {
            type: "varchar",
        },
        accountType: {
            type: "int",
        },
        userCpf: {
            type: "varchar",
            length: 14,
        },
        email: {
            type: "varchar",
        },
        password: {
            type: "varchar",
        },
    },
    // relations: {
    //     accountType: {
    //         target: "AccountType",
    //         type: "one-to-one",
    //         joinTable: true,
    //         cascade: false,
    //     },
    // },
})