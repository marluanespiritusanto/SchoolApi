'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    sectionId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Registration.associate = function(models) {
    // associations can be defined here
  };
  return Registration;
};