const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) =>{
    res.send("Hello From My first Server")
});

app.listen(port, () =>{
    console.log(`This app is runnin on port ${port}`)
})