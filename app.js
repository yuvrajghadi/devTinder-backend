const express = require("express");
const app = express();

app.use("/about", (req, res) => {
  res.send("about");
});

app.get("/", (req, res,next) => {
  next()
  res.send("homexjhbasj");
},
(req, res) => {
  res.send("home2");
}
);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app is listing on http://localhost:${PORT}`);
});

