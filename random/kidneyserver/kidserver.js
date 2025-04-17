const express = require("express");
const app = express();

app.use(express.json());

// In-memory kidney list
let kidneys = ["unhealthy", "unhealthy"];

// GET /check-kidneys - View kidney status
app.get("/check-kidneys", (req, res) => {
  res.send({
    kidneys,
    total: kidneys.length,
  });
});

// POST /add-kidney - Add new kidney (always healthy for simplicity)
app.post("/add-kidney", (req, res) => {
  kidneys.push("healthy");
  res.send("A new healthy kidney was added.");
});

// PUT /heal-kidney - Heal all kidneys
app.put("/heal-kidney", (req, res) => {
  kidneys = kidneys.map(() => "healthy");
  res.send("All kidneys are now healthy.");
});

// DELETE /remove-kidney - Remove one kidney
app.delete("/remove-kidney", (req, res) => {
  if (kidneys.length === 0) {
    return res.send("No kidneys to remove.");
  }
  kidneys.pop();
  res.send("One kidney was removed.");
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
