const Sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Char extends Model {
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
			},
			{
				sequelize,
				freezeTableName: true,
				modelName: 'Char',
				tableName: 'chars',
			}
		);

		return this;
	}
}

module.exports = Char;
