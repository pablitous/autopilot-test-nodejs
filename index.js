//create a rest api
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000, () => console.log("Example app listening on port 3000!"));

//add middleware with jwt authentication
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
