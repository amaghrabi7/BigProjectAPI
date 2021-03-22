module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Student", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  });
};
