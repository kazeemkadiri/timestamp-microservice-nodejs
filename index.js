const express = require("express");
const app = express();

//Route that returns unix and/or utc timestamp
app.get("/api/timestamp/:date_string?", function(req, res){
  const dateString = req.params.date_string;
  
  if(/^\d{4}-\d{2}-\d{2}$/.test(dateString)){
  
    const date = new Date( dateString );
    res.json({unix:date.getTime(), utc:date.toUTCString()});
  }    

  //Datestring like 130990039908
  if(/^\d+$/.test(dateString)){
    const date= new Date(parseInt(dateString));
    res.json({unix: date.getTime(), utc: date.toUTCString()});
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
