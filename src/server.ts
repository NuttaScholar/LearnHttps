import express from "express";
import https from "https";
import fs from "fs";
import path from "path";

// โหลด certificate
const key = fs.readFileSync(path.join(__dirname, "../cert/key.pem"));
const cert = fs.readFileSync(path.join(__dirname, "../cert/cert.pem"));

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello HTTPS with TypeScript");
});

const server = https.createServer({ key, cert }, app);

const PORT = 4433;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`HTTPS Server is running at https://localhost:${PORT}`);
});
