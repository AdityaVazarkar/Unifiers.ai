var Express = require("express");
var Mongoclient = require("mongodb").Mongoclient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://aditya:Aditya02@cluster0.affycvk.mongodb.net/chatApp?retryWrites=true&w=majority";










var DATABASENAME="chatApp";
var database;

app.listen(5038,()=>{
    Mongoclient.connect(CONNECTION_STRING , (error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongo DB Connection Successful");
    })
})