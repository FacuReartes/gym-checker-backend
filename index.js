import express from "express"
const app = express();
app.use(express.json());

import "./base-orm/sqlite-init.js"

app.get("/", (req, res) => {
  res.send("Incial Backend Gym Check")
});

import usersRouter from "./routes/users.js";
app.use(usersRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`site listened in port: ${port}`)
});