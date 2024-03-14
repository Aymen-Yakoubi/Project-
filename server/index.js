const express = require("express");
const productRoutes = require("./routes/product");
var bodyParser = require('body-parser');
// const categoryRoutes = require("./routes/category");
require('../server/controllers/product')
const db = require('./model/index');
const cors = require ('cors');
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(cors())
app.use("/api/product", productRoutes);
// app.use("/api/category", categoryRoutes);



app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));



app.listen(PORT, function () {
  console.log("listening on port 5000!");
});
