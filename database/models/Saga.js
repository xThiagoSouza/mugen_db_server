const Sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Saga extends Model {
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
				modelName: 'Saga',
				tableName: 'sagas',
			}
		);

		return this;
	}
}

module.exports = Saga;
