const { response } = require("express")

let users = [];

class UserController {
    getUsers(req, res) {
        if (users.length === 0) {
            return res.status(503).json({
                code: 503,
                error: 'Nenhum usuário cadastrado', 
            });
        };

        return res.json(users);
    }

    createUser(req, res) {
        const { name } = req.body;
        const newUser = {
            id: users.length + 1,
            name: name,
        };

        users.push(newUser);
        return res.status(201).json(newUser);
    }

    deleteUser(req, res) {
        const { id } = req.params;
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex < 0) {
            return response.status(400).json({ error: 'User não encontrado' });
        }

        users.splice(userIndex, 1);
        return response.status(204).send();
    
    }
}

const userController = new UserController();

module.exports = {
    userController,
};