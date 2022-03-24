import { Category } from "../models/category.js";

function index(req, res) {
	Category.find({})
		.then(categories => res.json(categories))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
}

function create() {

}

export { index, create };
