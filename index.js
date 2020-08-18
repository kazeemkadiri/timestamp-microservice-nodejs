const express = require("express");
const app = express();

//Route that returns unix and/or utc timestamp
app.get("/api/timestamp/:date_string", function(req, res){
  const dateString = req.params.date_string;
  
  const dateResult = new Date(dateString);
  

  if(dateResult == "Invalid Date"){
    res.json({error: "Invalid Date"});
  }    

  //If date is successfully parsed
  


});

//Configure app to listen on port
app.listen(process.env.PORT || 3000);
