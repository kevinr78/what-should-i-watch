import express from "express";
import cors from "cors";
import { config } from "dotenv";

import errorMiddleware from "./src/middleware/Error/error.middleware.js";
import { startServer } from "./src/config/startServer.js";
import { userRouter } from "./src/routes/User/user.route.js";

config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRouter);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, startServer);
