'use strict';

const db = require('../mockdata/bd.json');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	async up(queryInterface, Sequelize) {
		const sagas = db.sagas.map((obj) => {
			return { name: obj.sagaName };
		});

		await queryInterface.bulkInsert('sagas', sagas, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('sagas', null, {});
	},
};
