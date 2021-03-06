import { Game } from "../models/game.js";
import { Category } from "../models/category.js";

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
		.then(game => {
			Category.find({ _id: game.categories }).then(categories => {
				categories.forEach(category => {
					category.games.push(game)
					category.save()
				});
			});
			res.status(201).json(game);
		})
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

function show(req, res) {
	Game.findById(req.params.id)
		.populate("categories")
		.then(game => res.json(game))
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

function deleteGame(req, res) {
	Game.findByIdAndDelete(req.params.id)
		.then(game => {
			Category.find({ _id: game.categories }).then(categories => {
				categories.forEach(category => {
					category.games.remove(game);
					category.save();
				});
			});
			res.status(200).json(game);
		})
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

export { index, create, show, deleteGame as delete };
