const Sequelize = require('sequelize');

const databaseConfig = require('./config/database');

const Char = require('./models/Char');
const Move = require('./models/Move');
const Saga = require('./models/Saga');

const models = [Char, Move, Saga];

class Database {
	constructor() {
		this.init();
	}

	async testeConn() {
		try {
			await new Sequelize(databaseConfig).authenticate();
			console.log('Connection has been established successfully.');
		} catch (error) {
			console.error('Unable to connect to the database:', error);
		}
	}

	init() {
		this.connection = new Sequelize(databaseConfig);

		models
			.map((model) => model.init(this.connection))
			.map(
				(model) => model.associate && model.associate(this.connection.models)
			);
	}
}

module.exports = new Database();
