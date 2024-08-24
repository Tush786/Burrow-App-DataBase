const express = require("express");
const cors = require("cors");
const { connection } = require("./backend/config/connection");
const { UserRouter } = require("./backend/route/userroute");

require("dotenv").config();

const app = express();

app.use(
    cors({
        origin: "*",
    })
);

app.use(express.json());
app.use("/user", UserRouter);

// Setting up the server port
const PORT = process.env.PORT || 9111;

app.listen(PORT, async () => {
    try {
        await connection; 
        console.log("Database connection successful");
    } catch (err) {
        console.error("Failed to connect to the database:", err);
    }
    console.log(`Server is connected to port ${PORT}`);
});
