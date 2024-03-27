
const { database } = require('../database/database.js'); 

const userControler = () => {
    const datasource = database().getDatasource();
    const postUser = datasource.getRepository("User");
   
    const createUser = (request, res) => {
        const user = {
            nameUser: request.body.nameUser,
            profileName: request.body.profileName,
            accountType: request.body.accountType,
            userCpf: request.body.userCpf,
            email: request.body.email,
            password: request.body.password,
        };

        postUser
            .save(user)
            .then((savedUser) => {
                console.log("Usuário cadastrado: ", savedUser)
                // return res.status(400).json();
            });
    };
    
    return createUser;
}

module.exports = {
    userControler
};