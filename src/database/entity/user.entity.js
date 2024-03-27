
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
            nullable: false,
        },
        profileName: {
            type: "varchar",
        },
        accountType: {
            type: "int",
            nullable: false,
        },
        userCpf: {
            type: "varchar",
            length: 14,
            nullable: false,
            unique: true,
        },
        email: {
            type: "varchar",
            nullable: false,
        },
        password: {
            type: "varchar",
            nullable: false,
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

