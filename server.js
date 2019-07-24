const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const storage = require("./routes/storage.js");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use("/storage", storage);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`This server is running on port ${port}`));