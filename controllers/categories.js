import { Category } from "../models/category.js";

function index(req, res) {
	Category.find({})
		.populate("games")
		.then(categories => res.status(200).json(categories))
		.catch(err => {
			console.err(err);
			res.status(500).json(err);
		});
}

function create(req, res) {
	Category.create(req.body)
		.then(category => res.status(200).json(category))
		.catch(err => {
			console.err(err);
			res.status(500).json(err);
		});
}

function show(req, res) {
	Category.findById(req.params.id)
		.populate("games")
		.then(category => res.status(200).json(category))
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

export { index, create, show };
