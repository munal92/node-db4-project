const express = require('express');
const RecipeRouter = require('../Routers/recipe-router.js')
const IngredientRouter = require('../Routers/ingredients-router.js')
const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientRouter);

server.get('/', (req,res) => {
    res.send('<h1>Api is up!</h1>')
})


module.exports = server;