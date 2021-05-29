require("./config/config");
require("./db");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/route");

var app = express();

// Apply Middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);

// error handler
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    var valErrors = [];
    Object.keys(err.errors).forEach((key) =>
      valErrors.push(err.errors[key].message)
    );
    res.status(422).send(valErrors);
  }
});

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server started at port: ${process.env.PORT}`);
});
