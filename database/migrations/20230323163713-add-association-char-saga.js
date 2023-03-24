'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('chars', 'id_saga', {
			type: Sequelize.INTEGER,
			references: {
				model: 'sagas',
				key: 'id',
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL',
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('chars', 'id_saga');
	},
};
