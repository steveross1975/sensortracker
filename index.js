// server.js

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');
const authRoutes = require("./routes/authRoutes.js");
const healthRoutes = require("./routes/healthRoutes.js");
const measureRoutes = require("./routes/measureRoutes.js");
const sensorLayoutRoutes = require("./routes/sensorLayoutRoutes.js");
const sensorMatRoutes = require("./routes/sensorMatRoutes.js");
const userLayoutRoutes = require("./routes/userLayoutRoutes.js");

dotenv.config();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/health", healthRoutes);
app.use("/uvp", measureRoutes);
app.use("/layout", sensorLayoutRoutes);
app.use("/mat", sensorMatRoutes);
app.use("/ul", userLayoutRoutes);

mongoose
    .connect("mongodb://localhost:27017/sensortrackerDB")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

app.listen(PORT, (req, res) => {
    console.log("App Started on PORT:", PORT);
});