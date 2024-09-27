const express = require("express");
const app = express();

// Middleware to parse JSON bodies from POST requests
app.use(express.json());

// Dummy user data
const userData = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
};

// GET request to send user data
app.get("/user", (req, res) => {
  res.json(userData);
});

// POST request to acknowledge data reception
app.post("/user", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: "Data successfully received" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
