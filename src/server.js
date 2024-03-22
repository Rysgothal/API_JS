const express = require('express');	
const { userRouter } = require('./routes/user.router');

const main = () => {
    const app = express();
    const port = 3000;

    app.use(express.json());
    app.use(userRouter);

    app.listen(port, () => {
        console.log(`Server on-line: http://localhost:${port}`);
    });
}

main();