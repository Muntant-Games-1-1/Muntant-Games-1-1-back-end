import { Category } from "../models/category.js";

function index(req, res) {
	Category.find({})
		.then(categories => res.json(categories))
		.catch(err => {
			console.err(err);
			res.status(500).json(err);
		});
}

function create(req, res) {
	Category.create(req.body)
		.then(category => res.json(category))
		.catch(err => {
			console.err(err);
			res.status(500).json(err);
		});
}

export { index, create };
