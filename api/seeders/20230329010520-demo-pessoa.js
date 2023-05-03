const faker = require('faker');

const data = [];

for (let i = 0; i < 30; i++) {
  const nome = faker.name.firstName() + ' ' + faker.name.lastName();
  const ativo = faker.random.boolean();
  const email = faker.internet.userName() + '@' + faker.internet.domainName();
  const role = faker.random.arrayElement(['docente', 'estudante']);
  const createdAt = new Date();
  const updatedAt = new Date();

  data.push({
    nome,
    ativo,
    email,
    role,
    createdAt,
    updatedAt,
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('pessoas', data, {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('pessoas', null, {})
  }
}
