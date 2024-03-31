const express = require('express');
const userRouter = express.Router();
const { userController } = require('../controller/userController.js');

const user = new userController();

userRouter.post('/create', user.createUser);
userRouter.get('/login', user.userLogin);
    
userRouter.get('/', async (req, res) => {
    res.json({
        message: 'Servidor On-line',
        code: 200
    }).end();
});

module.exports = {
    userRouter
};