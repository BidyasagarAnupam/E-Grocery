const express = require('express');
const app = express();
const port = 80;
var path = require('path');

app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req, res)=> {
    res.status(200).sendFile(path.join(__dirname,'public','index.html'));
});

app.get("/signUpShop",(req, res)=> {
    res.status(201).sendFile(path.join(__dirname,'public','signUpShopkeeper.html'));
});

app.get("/allshop",function(req, res) {
    res.status(202).sendFile(path.join(__dirname,'public','allshop.html'));
});

app.listen(port, ()=> {
    console.log(`The application started sucessfully on port ${port}`);
})