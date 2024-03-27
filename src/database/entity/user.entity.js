
const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "User",               // Nome que vincula a entidade e a tabela
    tableName: "users",   
    columns: {
        id: {
            primary: true,
            type: Number,
            generated: true,
        },
        nameUser: {
            type: String,
            nullable: false,
        },
        profileName: {
            type: String,
        },
        accountType: {
            type: Number,
            nullable: false,
        },
        userCpf: {
            type: String,
            length: 14,
            nullable: false,
            unique: true,
        },
        email: {
            type: String,
            nullable: false,
        },
        password: {
            type: String,
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

