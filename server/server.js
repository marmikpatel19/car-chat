const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

// URI Configuration
dotenv.config();

// App Init
const app = express();

// DB Connection
mongoose.connect(process.env.DB_URI);

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

/* Routes */

// Port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
