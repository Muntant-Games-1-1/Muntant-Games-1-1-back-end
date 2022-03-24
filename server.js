import "dotenv/config.js";
import express from "express";
import logger from "morgan";
import cors from "cors";

import { router as profilesRouter } from "./routes/profiles.js";
import { router as authRouter } from "./routes/auth.js";
import { router as messagesRouter } from "./routes/messages.js";
import { router as gamesRouter } from "./routes/games.js";
import { router as categoriesRouter } from "./routes/categories.js";
import { router as lobbiesRouter } from "./routes/lobbies.js"

import("./config/database.js");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/api/profiles", profilesRouter);
app.use("/api/auth", authRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/games", gamesRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/lobbies", lobbiesRouter);

app.use(function (req, res, next) {
	res.status(404).json({ err: "Not found" });
});

app.use(function (err, req, res, next) {
	res.status(err.status || 500).json({ err: err.message });
});

export { app };
