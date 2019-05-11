"use strict";

module.exports = (sequelize, DataTypes) => {
  const UserCourse = sequelize.define(
    "userCourses",
    {
      userId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER
    },
    {
      tableName: "userCourses",
      timestamps: false
    }
  );
  UserCourse.associate = function(models) {};

  return UserCourse;
};
