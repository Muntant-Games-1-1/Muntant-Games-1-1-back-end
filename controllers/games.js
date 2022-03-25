import { Game } from "../models/game.js";
import { Category } from "../models/category.js"

function index(req, res) {
	Category.find({})
		.then(categories => {
			Game.find({})
				.populate("categories")
				.then(games => res.json({ games, categories }));
		})
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
