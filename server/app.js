//definere vores downloadede packages i variabler
//brugte packages: express, mongoose, dotenv (hiding passwords etc.)

const express = require('express');
//const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
//require('dotenv/config');

//sætter app til at indeholde funktionerne fra express, express kan bruges til at lave routes
const app = express();

//app.use(bodyParser.json());


//routes
//const postsRoute = require('../routes/posts')

//middleware til posts routes
//app.use('../routes/posts', postsRoute);



//middleware til at tjekke om brugeren kan submitte
//app.use(auth);



//const path = require("path");

//app.use(cors())

/*connecter til databasen
mongoose.connect(
  process.env.DB_CONNECTION,
{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.log('connected to DB'))
*/

//sætter serveren til at lytte på port 8010
const server = app.listen(8010, () =>{
  console.log('listening on port %s...', server.address().port)
}); 

//laver en route til vores index.html med thomas, fordi det ikke virkede, virker måske nedenunder

/*app.get("/", function( req,res){
  let reqPath = path.join(__dirname, '../')
  console.log(reqPath)
    res.sendFile(path.join(reqPath + "Views/index.html"))
})

app.use(express.static("Views"))
*/

app.get('/', (req, res) => {
  res.send('det virker');
})



