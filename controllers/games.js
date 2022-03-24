import { Game } from "../models/game.js";

function index(req, res) {
	Game.find({})
		.then(games => res.json(games))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
}

function create(req, res) {
	Game.create(req.body)
		.then(game => res.status(201).json(game))
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

export { index, create };
