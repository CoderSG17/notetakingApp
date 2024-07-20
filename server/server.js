// Importing Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config();



// Middlewares
app.use(express.json()); // JSON Parser
app.use(express.urlencoded({ extended: true })); // URL Body Parser

// CORS
app.use(
  cors({
    origin: "*",
    // credentials: true,
  })
);

// Routes
const routes = require("./routes/routes");
app.use(routes);
