import { Lobby } from "../models/lobby.js";

function index(req, res) {
	Lobby.find({})
		.then(lobbies => res.json(lobbies))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
}

function create(req, res) {
	Lobby.create(req.body)
		.then(lobby => res.status(201).json(lobby))
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

export { index, create };
