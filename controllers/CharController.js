const Char = require('../database/models/Char');
const Saga = require('../database/models/Saga');

module.exports = {
	async index(req, res) {
		try {
			const chars = await Char.sequelize.query(
				`SELECT
          chars.id, 
          chars.name,
          sagas.name as saga
        FROM chars
        JOIN sagas ON chars.id_saga=sagas.id;`
			);

			const sagas = await Saga.findAll({ attributes: ['name'], raw: true });

			return res.send({
				sagas: sagas.map((saga) => {
					return {
						saga: saga.name,
						chars: chars[0].filter((char) => {
							return char.saga === saga.name;
						}),
					};
				}),
			});
		} catch (error) {
			return res.send(error);
		}
	},

	async find(req, res) {
		try {
			const { id } = req.params;

			const char = await Char.sequelize.query(
				`SELECT 
          chars.id,
          chars.name,
          sagas.name as saga,
          moves.name as moves
        FROM chars
        JOIN sagas 
        ON sagas.id=chars.id_saga
        JOIN moves
        ON moves.id_char=chars.id
        WHERE chars.id=${id};`
			);

			return res.send({
				id: char[0][0].id,
				name: char[0][0].name,
				saga: char[0][0].saga,
				moves: char[0].map((obj) => obj.moves),
			});
		} catch (error) {
			return res.send(error);
		}
	},
};
