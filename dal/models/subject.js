"use strict";
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define(
    "Subject",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {}
  );
  Subject.associate = function(models) {
    Subject.associate = function(models) {
      Subject.hasMany(models.Section, {
        foreignKey: "subjectId",
        as: "sections"
      });
    };
  };
  return Subject;
};
