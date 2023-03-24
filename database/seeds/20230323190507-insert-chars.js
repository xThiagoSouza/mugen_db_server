'use strict';

const { sagas } = require('../mockdata/bd.json');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	async up(queryInterface, Sequelize) {
		const sagasOnDB = await queryInterface.select(null, 'sagas');

		const charsToInsert = [];

		sagas.forEach((saga) => {
			const index = sagasOnDB.findIndex((s) => s.name === saga.sagaName);

			saga.chars.forEach((char) =>
				charsToInsert.push({
					name: char.name,
					id_saga: sagasOnDB[index].id,
				})
			);
		});

		await queryInterface.bulkInsert('chars', charsToInsert, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('chars', null, {});
	},
};
