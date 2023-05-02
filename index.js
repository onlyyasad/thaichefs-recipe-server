const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) =>{
    res.send("Hello From My Server")
});

app.get('/chefs', (req, res) =>{
    res.send(chefs)
});

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    console.log('i need data for id: ', id);
    const chefsRecipes = recipes.filter(r => r.chef_id === id) || {};
    res.send(chefsRecipes);
});

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    console.log('i need data for id: ', id);
    const singleRecipe = recipes.find(r => r.id === id) || {};
    res.send(singleRecipe);
});

app.listen(port, () =>{
    console.log(`This app is running on port ${port}`)
});