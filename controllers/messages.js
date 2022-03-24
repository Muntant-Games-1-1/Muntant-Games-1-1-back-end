import { Message } from "../models/message.js";

function index(req, res) {
	Message.find({})
		.then(messages => res.json(messages))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
}

export { index };
