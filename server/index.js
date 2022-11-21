const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./route/routes");

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
