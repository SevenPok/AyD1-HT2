import express from "express";
const app = express();

//middlewares
app.set("port", process.env.PORT || 3000);

//routes
app.get("/", (req, res) => {
  const data = {
    name: "Analisis y Diseño 1",
    website: "Hola mundo - 201800586 Hotfix",
  };
  res.json(data);
});

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
