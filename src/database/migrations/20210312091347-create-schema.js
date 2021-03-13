module.exports = {
  up: async queryInterface => {
    await queryInterface.createSchema('api_growdev')
  },

  down: async queryInterface => {
    await queryInterface.dropSchema('api_growdev')
  }
};
