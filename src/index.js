
const express = require('express');
const { database } = require('./database/database.js');
const { userControler } = require('./controller/user.controller.js');
const { getHashMD5 } = require('./helpers/string.helper.js');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/create', async (req, res) => {
    try {
        const createUser = userControler();
        
        createUser(req, res);
        res.status(201).json({
            message: 'Usuário cadastrado com sucesso',
            code: 201
        });
        res.end();
        
    } catch (error) {
        console.error(error);
        res.status(404);
        res.end();
    }
});

app.get('/list', async (req, res) => {
    console.log(req.body.password);
    console.log(getHashMD5(req.body.password));
    res.end();
});


app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
    await database().init();
});


