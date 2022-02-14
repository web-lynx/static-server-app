const express = require("express");
const app = express();
const port = 5001;

app.use("/home", express.static("public"));
app.use("/coffee", express.static("public/drinks/coffee.html"));
app.use("/spirits", express.static("public/drinks/spirits.html"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
