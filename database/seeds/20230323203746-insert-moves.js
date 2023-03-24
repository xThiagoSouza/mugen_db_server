'use strict';

const { sagas } = require('../mockdata/bd.json');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	async up(queryInterface, Sequelize) {
		const movesToInsert = [];

		const charsOnDB = await queryInterface.select(null, 'chars');

		sagas.forEach((saga) => {
			const { chars } = saga;

			chars.forEach((char) => {
				if (char.movelist.length > 0) {
					const index = charsOnDB.findIndex((c) => c.name === char.name);

					char.movelist.forEach((move, i) => {
						movesToInsert.push({
							id_char: charsOnDB[index].id,
							name: `${char.name.toLocaleLowerCase().replace(/ /g, '-')}-move-${
								i + 1
							}.jpg`,
						});
					});
				}
			});
		});

		await queryInterface.bulkInsert('moves', movesToInsert, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('moves', null, {});
	},
};
