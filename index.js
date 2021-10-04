const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "OK",
  });
});

app.listen(port, () => console.log("Server running port 8080"));
