"use strict";
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {}
  );
  Student.associate = function(models) {
    Student.belongsToMany(models.Section, {
      through: "Registration",
      as: "sections",
      foreignKey: "studentId"
    });
  };
  return Student;
};
