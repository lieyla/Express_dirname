const express= require ("express");
const app = express();


app.get("/home", function(req,response){
    response.sendFile(__dirname + '/home.html')
});

app.get("/MyPage", function( req,response){
    response.sendFile(__dirname + '/MyPage.html')
});

app.get("/Travel", function(req,response){
    response.sendFile(__dirname + '/Travel.html')
});

app.listen("3001", function(){
console.log("port running on 3001")
});

