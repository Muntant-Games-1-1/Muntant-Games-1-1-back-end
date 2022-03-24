import mongoose from "mongoose";

const Schema = mongoose.Schema;

const gameSchema = new Schema(
	{
		name: String,
		backgroundImg: {
			type: String,
			default:
				"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    maxPlayers: Number,
    description: String,
	},
	{
		timestamps: true,
	}
);

const Game = mongoose.model("Game", gameSchema);

export { Game };
