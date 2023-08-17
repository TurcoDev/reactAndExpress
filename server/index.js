const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Home Server!!!")
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello Server!!!" })
})

app.get("/api/v1", (req, res) => {
  console.log("/api/v1");
  res.json({ message: "Hola desde Boton!!!" })
})

app.listen(PORT, () => {
  console.log(`Server listening on http:localhost:${PORT}`);
})