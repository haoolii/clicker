import express from "express";
import dotenv from "dotenv";
import db from "./db";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", async (req, res) => {
  const user = await db.user.findFirst();

  res.json({
    message: "Hello Express & Vercel !!",
    data: {
      user,
    },
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
