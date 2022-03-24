import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema(
	{
		owner: { type: Schema.Types.ObjectId, ref: "Profile" },
		lobby: { type: Schema.Types.ObjectId, ref: "Lobby" },
		content: String,
	},
	{
		timestamps: true,
	}
);

const Message = mongoose.model("Message", messageSchema);

export { Message };
