const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize('ecommerce',"fayrouz", "root",{
  host: "localhost",
  dialect: "mysql",
});

async function testconnection() {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testconnection();

const db = {};

db.Product = require("./product")(connection, DataTypes);
// db.Category = require("./category")(connection, DataTypes);

// db.Category.hasMany(db.Product);
// db.Product.belongsTo(db.Category);

// connection.sync({ force: true });

module.exports = db;
