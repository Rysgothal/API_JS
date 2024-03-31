
const express = require('express');
const { userRouter } = require('./routers/userRouter.js'); 
const { database } = require('./database/database.js');

const app = express();
const port = 3050;

app.use(express.json());
app.use('/user', userRouter);

app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
    await database().init();
});