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
	req.body.owner = req.user.profile;
	Lobby.create(req.body)
		.then(lobby => res.status(201).json(lobby))
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

function deleteLobby(req, res) {
	Lobby.findByIdAndDelete(req.params.id)
		.then(lobby => res.status(200).json(lobby))
		.catch(err => res.status(405).json(err))
}

function show(req, res){
	Lobby.findById(req.params.id)
	.then(lobby => res.status(200).json(lobby))
	.catch(err => res.status(500).json(err))
}

export {
	 index, 
	 create, 
	 deleteLobby as delete,
	 show,
	};
