// server.js

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");
const healthRoutes = require("./routes/healthRoutes.js");

dotenv.config();
const PORT = 4000;

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/health", healthRoutes);

mongoose
    .connect("mongodb://localhost:27017/healthTrackerDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

app.listen(PORT, (req, res) => {
    console.log("App Started on PORT:", PORT);
});