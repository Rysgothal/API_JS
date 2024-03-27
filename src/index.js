
const express = require('express');
const { database } = require('./database/database.js');
const { userControler } = require('./controller/user.controller.js');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/create', async (req, res) => {
    try {
        const createUser = userControler();
        
        // Call the createUser function passing request and response objects
        createUser(req, res);
        res.status(201);
        res.end();
        
    } catch (error) {
        console.error(error);
        res.status(404);
        res.end();
    }
});

// app.get('/list', async (req, res) => {
//     const posts = await controller().listAll();

//     res.json(posts);
// });


app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
    await database().init();
});


