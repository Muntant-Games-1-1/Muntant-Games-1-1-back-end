import { Message } from "../models/message.js";
import { Lobby } from "../models/lobby.js";

function index(req, res) {
	Message.find({ lobby: req.params.id })
		.populate("owner")
		.then(messages => res.json(messages))
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

function create(req, res) {
	req.body.owner = req.user.profile;
	console.log(req.body)
	Message.create(req.body)
		.then(message => message.populate("owner"))
		.then(message => {
			Lobby.findById(message.lobby._id).then(lobby => {
				lobby.messages.push(message);
				lobby.save().then(lobby => {
					res.status(200).json(message);
				});
			});
		})
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

function deleteMessage(req, res) {
	Message.findByIdAndDelete(req.params.messageId)
		.then(message => {
			Lobby.findById(req.params.lobbyId)
				.then(lobby => {
					lobby.messages.remove(message);
					lobby.save().then(() => {
						res.status(200).json(message)
					})
				})
		})
		.catch(err => {
			console.error(err);
			res.status(405).json(err);
		});
}

function update() {
	Message.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then(message => res.status(200).json(message))
		.catch(err => {
			console.error(err);
			res.status(405).json(err);
		});
}

export { index, create, deleteMessage as delete, update };
