const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("React CRUD server is running!");
});

app.listen(port, () => {
  console.log(`React CRUD server is running on Port:${port}`);
});

// bootcamp_db_user_asif
// 12345678
