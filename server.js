const express = require("express");
const db = require("./db");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "SWYNEX API is running successfully"
  });
});

app.get("/api/expenses", (req, res) => {
  const sql = "SELECT * FROM expenses";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: "Failed to fetch expenses"
      });
    }

    res.json(results);
  });
});
app.post("/api/expenses", (req, res) => {
  const { title, amount, category } = req.body;

  if (!title || !amount || !category) {
    return res.status(400).json({
      error: "Title, amount, and category are required"
    });
  }

  const sql = `
    INSERT INTO expenses (title, amount, category)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [title, amount, category], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "Failed to create expense"
      });
    }

    res.status(201).json({
      message: "Expense created successfully",
      id: result.insertId
    });
  });
});
app.put("/api/expenses/:id", (req, res) => {
  const { id } = req.params;
  const { title, amount, category } = req.body;

  if (!title || !amount || !category) {
    return res.status(400).json({
      error: "Title, amount, and category are required"
    });
  }

  const sql = `
    UPDATE expenses
    SET title = ?, amount = ?, category = ?
    WHERE id = ?
  `;

  db.query(sql, [title, amount, category, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "Failed to update expense"
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "Expense not found"
      });
    }

    res.json({
      message: "Expense updated successfully"
    });
  });
});
app.delete("/api/expenses/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM expenses WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "Failed to delete expense"
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "Expense not found"
      });
    }

    res.json({
      message: "Expense deleted successfully"
    });
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});