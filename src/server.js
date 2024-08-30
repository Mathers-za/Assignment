import express from "express";
import dotenv from "dotenv";
import nelsonMandelaEndpoint from "./routes/nelsonMandelaTest.js";
dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", nelsonMandelaEndpoint);
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: `Url ${req.url} not found` }); // this endpoint catches unmatched urls automtaically
});

app.listen(port, () => {
  console.log(`Listening on LocalHost, port ${port} `);
});
