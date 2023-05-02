const express = require('express');
const app = express();
const port = 5000;
const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) =>{
    res.send("Hello From My Server")
});

app.listen(port, () =>{
    console.log(`This app is runnin on port ${port}`)
})