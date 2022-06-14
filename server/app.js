import express from "express";
const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
    res.send("HELLO WORLD!")
})

app.listen(PORT, () => {
    console.log("Server Listening on Port" + PORT)
})