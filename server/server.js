// express js
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/data", async (req, res) => {
  try {
    const pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "db_User",
      password: "191919",
      port: 5432,
    });

    const result = await pool.query("SELECT * FROM tb_user");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
