const express = require('express');
const cors = require('cors');

const app = express();
const { connectToDatabase } = require('./db/conn');

app.use(express.json());

// Configurando o middleware CORS corretamente
app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");

    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");

    app.use(cors());
    next();
});

app.use(express.static('public'));

connectToDatabase();

const UserRoutes = require('./routes/UserRoutes');
const PetRoutes = require('./routes/PetRoutes');

app.use('/users', UserRoutes);
app.use('/pets', PetRoutes);

app.listen(5000, () => {
    console.log('Servidor escutando na porta 5000');
});
