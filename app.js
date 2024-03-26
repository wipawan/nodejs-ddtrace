const express = require("express");
const app = express();

const port = 8080;

app.get("/", (req, res) => {
  const response = {
    message: "Hello, World!",
    timestamp: new Date(),
  };

  res.json(response);
});

app.get("/error", (req, res) => {
  throw new Error("This is a simulated application error");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
