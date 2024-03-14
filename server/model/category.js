module.exports = (connection, DataTypes) => {
    const Category = connection.define(
      "category",
      {
        // Model attributes are defined here
        name: {
          type: DataTypes.ENUM(["Electronic", "No Options"]),
          defaultValue: "No Options",
        },
      },
      {
        // Other model options go here
      }
    );
  
    return Category;
  };
  