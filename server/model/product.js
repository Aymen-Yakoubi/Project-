module.exports = (connection, DataTypes) => {
    const Product = connection.define(
      "products",
      {
        // Model attributes are defined here
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        imgurl: {
          type: DataTypes.STRING,
          // allowNull defaults to true
        },
        price: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
          // allowNull defaults to true
        },
        quantity: {
          type: DataTypes.INTEGER,
          // allowNull defaults to true
        },
        options: {
          type: DataTypes.ENUM([
            "promotion",
            "verified",
            "deliveryCost",
            "Available",
            "No Options",
          ]),
          defaultValue: "No options",
  
          // allowNull defaults to true
        },
      },
  
    );
  
    return Product;
  };
  