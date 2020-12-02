const express = require("express");

//const cors = require("cors");

const app = express();

const path = require("path");


//app.use(cors())

/*app.get("/", function( req,res){
    res.send('Hello World' + i++)
})*/

const server = app.listen(4000, () =>{
  console.log('listening on port %s...', server.address().port)
}); 