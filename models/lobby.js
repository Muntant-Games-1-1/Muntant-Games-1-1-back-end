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
		languages: { 
			type: String,
			enum: [ 'English', 'Spanish', 'French', 'Chinese', 'Hindus' ],
			default: 'English'
		},
		competitive: {
			type: String,
			enum :[ 'Easy', 'Medium', 'hard', 'competitive' ],
			default: 'Medium'
		},
		console: { 
			type: String,
			enum :[ 'Xbox', 'Pc', 'Nintendo', 'Playstation', 'Any' ],
			default: 'Pc'
		},
		region: {
			type: String,
			enum :[ 'North', 'East', 'South', 'West' ],
			default: 'East'
		},
	},
	{
		timestamps: true,
	}
);

const Lobby = mongoose.model("Lobby", lobbySchema);

export { Lobby };
