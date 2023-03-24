const Sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Move extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: DataTypes.NUMBER,
					primaryKey: true,
					autoIncrement: true,
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				id_char: {
					type: DataTypes.NUMBER,
					allowNull: false,
				},
			},
			{
				sequelize,
				freezeTableName: true,
				modelName: 'Move',
				tableName: 'moves',
			}
		);

		return this;
	}
}

module.exports = Move;
