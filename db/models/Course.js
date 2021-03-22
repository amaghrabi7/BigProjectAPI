module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Course", {
    title: {
      type: DataTypes.STRING,
    },
    field: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.STRING,
    },
  });
};
