import mongoose from "mongoose";

const Schema = mongoose.Schema;

const lobbySchema = new Schema(
	{
		name: String,
		owner: { type: Schema.Types.ObjectId, ref: "Profile" },
		game: { type: Schema.Types.ObjectId, ref: "Game" },
		waitingPlayers: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
		messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
		lobbyLimit: { type: Number, min: 2 },
	},
	{
		timestamps: true,
	}
);

const Lobby = mongoose.model("Lobby", lobbySchema);

export { Lobby };
