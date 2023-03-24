const express = require('express');
const cors = require('cors');

require('./database');

const CharController = require('./controllers/CharController');

const server = express();
const port = 3001;

server.use(cors());
server.use(express.json());

server.use('/images', express.static('images'));

server.get('/', CharController.index);

server.get('/char/:id', CharController.find);

server.listen(port, () => console.log(`Server rodando na porta ${port}`));
