import { Lobby } from "../models/lobby.js";

function index(req, res) {
	Lobby.find({})
		.populate(["owner", "game", "waitingPlayers", "messages"])
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
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

function show(req, res) {
	Lobby.findById(req.params.id)
		.populate("waitingPlayers")
		.then(lobby => res.status(200).json(lobby))
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

function update() {
	Lobby.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.populate(["owner", "game", "waitingPlayers", "messages"])
		.then(lobby => res.status(200).json(lobby))
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

function join(req, res) {
	Lobby.findByIdAndUpdate(req.params.id, null, { new: true })
		.then(lobby => {
			lobby.waitingPlayers.includes(req.user.profile)
				? lobby.waitingPlayers.splice(req.user.profile, 1)
				: lobby.waitingPlayers.push(req.user.profile);
			lobby.save().then(lobby => res.status(200).json(lobby));
		})
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

export { index, create, deleteLobby as delete, show, update, join };
