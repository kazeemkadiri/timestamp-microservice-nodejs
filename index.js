const express = require("express");
const app = express();

//Route that returns unix and/or utc timestamp
app.get("/", function(req, res){
  res.send("Hello");
});

//Configure app to listen on port
app.listen(process.env.PORT || 3000);
