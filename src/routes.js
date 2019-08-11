const express = require('express');
const DevController = require('./controllers/DevController.js');
const LikeController = require('./controllers/LikeController.js');
const DislikeController = require('./controllers/DislikeController.js');
const routes = express.Router();

//GET, POST, PUT, DELETE

/*routes.get('/', function requisicao(req, res) {
	return res.json({ message: `Hello ${req.query.name}`});
});*/

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;