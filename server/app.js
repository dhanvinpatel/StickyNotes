import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./dbConnect.js";
import noteRoutes from "./noteRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

dbConnect();

app.use("/", (req, res) => {
  res.send("Server is running")
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});