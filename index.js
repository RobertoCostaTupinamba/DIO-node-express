const { json } = require('body-parser');
const express = require('express');

const userRoute = require('./routes/userRoute')

const api = express();
api.use(json())
const port = 3000;

userRoute(api)

api.listen(port, () => {
    console.log("rodando na porta 300 ✨");
})

api.get("/", (request, response) => {
    response.send("Ola meu mundo")
})
