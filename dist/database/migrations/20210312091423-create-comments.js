"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'comments',
      {
        uuid: {
          type: Sequelize.DataTypes.UUID,
          allowNull: false,
          defaultValue: Sequelize.DataTypes.UUIDV1,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING(120),
          allowNull: false,
        },
        content: {
          type: Sequelize.DataTypes.STRING(240),
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        }
      },
      {
        tableName: 'comments',
        schema: 'api_growdev',
      }
    )
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'comments',
      schema: 'api_growdev',
    })
  }
};
