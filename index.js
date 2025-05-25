const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

let schedule = [];

app.use(cors());
app.use(express.json());

app.get("/api/schedule", (req, res) => {
  res.json(schedule);
});

app.post("/api/schedule", (req, res) => {
  const { name, datetime } = req.body;
  if (!name || !datetime) {
    return res.status(400).json({ message: "Name and datetime are required" });
  }

  const newEntry = { name, datetime };
  schedule.push(newEntry);
  res.status(201).json(newEntry);
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
