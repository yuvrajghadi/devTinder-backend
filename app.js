const express = require("express");
const app = express();

app.use("/about", (req, res) => {
  res.send("about");
});

app.use("/", (req, res) => {
  res.send("homexjhbasj");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app is listing on http://localhost:${PORT}`);
});

