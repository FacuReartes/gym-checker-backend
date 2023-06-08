import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Backend inicial Gym Check")
});

const port = 3000;
app.listen(port, () => {
  console.log(`sitio escuchado en el puerto ${port}`)
});