const express = require("express");
const routes = require("./routes");
const PORT = 5050;
const app = express();
const morgan = require("morgan");
morgan("dev");
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
