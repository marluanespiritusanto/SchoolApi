"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Registrations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sectionId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Sections",
          key: "id"
        }
      },
      studentId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Students",
          key: "id"
        }
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Registrations");
  }
};
