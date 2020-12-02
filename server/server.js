//definere vores downloadede packages i variabler
//brugte packages: express, mongoose, dotenv (hiding passwords etc.)

const express = require("express");

//const cors = require("cors");

//sætter app til at indeholde funktionerne fra express
const app = express();

//middleware til at tjekke om brugeren kan submitte
//app.use(auth);

const path = require("path");

//app.use(cors())

//sætter serveren til at lytte på port 4000
const server = app.listen(5500, () =>{
  console.log('listening on port %s...', server.address().port)
}); 

//laver en route til at fortælle os om serveren er oppe og køre
app.get("/", function( req,res){
  let reqPath = path.join(__dirname, '../')
  console.log(reqPath)
    res.sendFile(path.join(reqPath + "Views/index.html"))
})

app.use(express.static("Views"))

