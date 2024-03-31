
const { database } = require('../database/database.js'); 
const { getHashMD5 } = require('../helpers/string.helper.js');

class userController {
    constructor () {
        this.initDatabase();
    };

    initDatabase = async () => {
        await database().init();
        this.datasource = database().getDatasource();
        this.userDatabase = this.datasource.getRepository("User");
    };

    createUser = (req, res) => {
        const user = this.GetUserBodyToJSON(req);
        console.log("Requisição de criação de usuário recebida: ", user);

        this.userDatabase
            .save(user)
            .then((savedUser) => {
                res.json({
                    message: "Usuário cadastrado com sucesso",
                    code: 201, 
                    user: savedUser,
                }).end();
            })
            .catch((error) => {
                console.error("Erro ao cadastrar usuário: ")
                res.json({
                    message: "Usuário não pode ser cadastrado",
                    code: 404,
                    errorMessage: error,  
                }).end();
            });        
    };

    GetUserBodyToJSON = (req) => {
        return {
            nameUser: req.body.nameUser,
            profileName: req.body.profileName,
            accountType: req.body.accountType,
            userCpf: req.body.userCpf,
            email: req.body.email,
            password: getHashMD5(req.body.password),
        };
    };

    userLogin = (req, res) => {
        if (req.body.profileName === undefined) {
            if (this.userDatabase.findOne({ where: { email: req.body.email } })) {
                res.status(404).json({
                    message: "email não cadastrado",
                    code: 404,
                }).end();     
            } else {
                this.loginWithEmail(req.body, res);
            };
        } else {
            if (this.userDatabase.findOne({ where: { profileName: req.body.profileName } })) {
                res.status(404).json({
                    message: "Usuário não cadastrado",
                    code: 404,
                }).end();     
            } else {    
            this.loginWithProfileName(req.body, res);
            };
        };
    };

    loginWithEmail = (loginUser, res) => {
        this.userDatabase
            .findOne({ where: { email: loginUser.email, password: getHashMD5(loginUser.password) } })
            .then((userLogin) => {
                console.log("login feito com sucesso", userLogin.profileName);

                res.status(200).json({
                    message: "Login feito com sucesso",
                    code: 200,
                    profileName: userLogin.profileName,
                    userId: userLogin.id,
                }).end();
            }).catch((error, res) => {
                res.status(404).json({
                    message: "Email ou senha incorretos",
                    code: 404,
                    errorMessage: error,
                }).end();
            });
    };

    loginWithProfileName = (loginUser, res) => {
        this.userDatabase
            .findOne({ where: { profileName: loginUser.profileName, password: getHashMD5(loginUser.password) } })
            .then((userLogin) => {
                console.log("login feito com sucesso", userLogin.profileName);

                res.status(200).json({
                    message: "Login feito com sucesso",
                    code: 200,
                    profileName: userLogin.profileName,
                    userId: userLogin.id,
                }).end();
            }).catch((error) => {
                res.status(404).json({
                    message: "Nome de perfil ou senha incorretos",
                    code: 404,
                    errorMessage: error,
                }).end();
            });
    };
};

module.exports = {
    userController
};