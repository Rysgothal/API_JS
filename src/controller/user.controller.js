
const { database } = require('../database/database.js'); 
const { getHashMD5 } = require('../helpers/string.helper.js');

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
            password: getHashMD5(request.body.password),
        };

        postUser
            .save(user)
            .then((savedUser) => {
                console.log("Usuário cadastrado: ", savedUser);
            });
    };
    
    return createUser;
}

module.exports = {
    userControler
};