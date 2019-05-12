"use strict";
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    "Teacher",
    {
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      biography: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {}
  );
  Teacher.associate = function(models) {
    Teacher.hasMany(models.Section, {
      foreignKey: "teacherId",
      as: "sections"
    });
  };
  return Teacher;
};
