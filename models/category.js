import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema(
	{
		name: String,
		games: [{ type: Schema.Types.ObjectId, ref: "Game" }],
		description: String,
		backgroundImg: String,
	},
	{
		timestamps: true,
	}
);

const Category = mongoose.model("Category", categorySchema);

export { Category };
