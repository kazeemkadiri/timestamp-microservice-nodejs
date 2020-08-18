const express = require("express");
const app = express();

//Route that returns unix and/or utc timestamp
app.get("/api/timestamp/:date_string?", function(req, res){
  const dateString = req.params.date_string;
  
  const dateResult = new Date(dateString);
//  console.log(dateString);

  if(dateResult == null){
    res.json({error: "Invalid Date"});
  }    

  //If date is successfully parsed
  
  //If dateString is empty, generate the current date and time
  if(dateString === undefined){
    const currentDate = new Date();
    res.json({unix: currentDate.getTime(), utc: currentDate.toUTCString()});
  }  


});

//Configure app to listen on port
app.listen(process.env.PORT || 3000);
