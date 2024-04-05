import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./utils/config.js";
import itemRouter from "./routes/itemRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";

const app = express();

const connectionToDB = async (url) => {
  await mongoose.connect(url);
  console.log("Now connected to the databae");
};

connectionToDB(config.MONGODB);

app.use(express.json());
app.use(cors());
app.use("/api/items", itemRouter);
app.use("/api/categories", categoryRouter);
export default app;
