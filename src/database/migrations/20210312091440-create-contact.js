module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'contact',
      {
        uuid: {
          type: Sequelize.DataTypes.UUID,
          allowNull: false,
          defaultValue: Sequelize.DataTypes.UUIDV1,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING(120),
          allowNull: false
        },
        email: {
          type: Sequelize.DataTypes.STRING(70),
          allowNull: false
        },
        phone: {
          type: Sequelize.DataTypes.STRING(20),
          allowNull: false
        },
        message: {
          type: Sequelize.DataTypes.STRING(400),
          allowNull: false
        },
        created_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true
        }
      },
      {
        tableName: 'contact',
        schema: 'api_growdev'
      }
    )
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'contact',
      schema: 'api_growdev'
    })
  }
};
