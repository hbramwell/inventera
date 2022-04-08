'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.DECIMAL
      },
      minStock: {
        type: Sequelize.DECIMAL
      },
      unitId: {
        type: Sequelize.UUID
      },
      unitCost: {
        type: Sequelize.DECIMAL
      },
      sku: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.UUID
      },
      materialId: {
        type: Sequelize.UUID
      },
      userId: {
        type: Sequelize.UUID
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};