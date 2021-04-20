import path from "path";
import express from "express";
import dotenv from "dotenv";
import subscribe from "./mqtt/mqtt.js";
const port = process.env.PORT || 5001;

dotenv.config();
const app = express();
app.use(express.json());

subscribe();

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
);
app.listen(port, console.log("server start", port, process.env.NODE_ENV));
