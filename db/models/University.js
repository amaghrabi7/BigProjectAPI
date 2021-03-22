module.exports = (sequelize, DataTypes) => {
  const University = sequelize.define("University", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    degree: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return University;
};
