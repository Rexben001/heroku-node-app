const express = require("express");
const app = express();

// Use process.env.PORT while in Heroku and 3030 when on localhost
const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => res.status(200).send("Welcome to heroku node app"));

app.listen(PORT);
