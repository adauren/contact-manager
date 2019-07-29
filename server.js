const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.send("API Running");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
