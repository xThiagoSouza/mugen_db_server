'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('moves', 'id_char', {
			type: Sequelize.INTEGER,
			references: {
				model: 'chars',
				key: 'id',
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL',
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('moves', 'id_char');
	},
};
