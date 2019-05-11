"use strict";

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "courses",
    {
      lecturerId: DataTypes.INTEGER,
      courseName: DataTypes.STRING
    },
    {
      tableName: "courses",
      timestamps: false
    }
  );

  Course.associate = function(models) {
    Course.belongsToMany(models.users, {
      through: "userCourses",
      as: "users",
      foreignKey: "courseId"
    });

    Course.belongsTo(models.lecturers, {
      foreignKey: "lecturerId",
      as: "lecturers"
    });
  };

  return Course;
};
