const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();

const storage = require("./routes/storage.js");
const isEmpty = require("./validation/is-empty.js");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use("/storage", storage);

mongoose.connect('mongodb://localhost:27017/example', {useNewUrlParser: true}).then(() => {
    console.log("Connection sucessful")}, 
    err => {console.log('bad choice')}
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`This server is running on port ${port}`));