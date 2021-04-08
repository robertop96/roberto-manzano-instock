const express = require('express');
const routes = require('./routes');
const router = require('./routes/warehouse');
const PORT = 5050;
const app = express();

app.use(express.json());
app.use('/', routes);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
