module.exports = {
	dialect: process.env.DB_DIALECT || 'mysql',
	host: process.env.DB_HOST || 'localhost',
	username: process.env.DB_USERNAME || 'Thiago',
	password: process.env.DB_PASSWORD || 'root',
	database: process.env.DB_DATABASE || 'mugen',
	define: {
		timestamp: true,
		underscored: true,
		underscoredAll: true,
	},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	logging: false,
};
