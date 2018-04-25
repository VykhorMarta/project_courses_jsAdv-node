const express = require("express");
const mongoose = require("mongoose");
const Item = require("./api/models/item")
const itemRoutes = require("./api/routes/itemRoutes")

const app = express();

mongoose.connect("mongodb://localhost:27017/onlineShopDB");

var db = mongoose.connection;

db.on("error", function() {
    console.log("error");
});

db.on("open", function (){
    console.log("connected");
});

app.all((req,res,next) => {
    res.header("Access-Control-Allow_Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if(req.method === "Option"){
        res.header("Access-Control-Allow-Methods", "POST", "GET", "DELETE");
    };
    next();
});

app.use('/item', itemRoutes);

module.exports = app;