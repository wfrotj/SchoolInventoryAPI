import express from "express";
import itemController from "../controllers/itemController.js";

const itemsRouter = express.Router();

itemsRouter.get("/", itemController.getItems);
itemsRouter.get("/:id", itemController.getItem);
itemsRouter.post("/", itemController.createItem);
itemsRouter.put("/:id", itemController.editItem);
itemsRouter.delete("/:id", itemController.deleteItem);

export default itemsRouter;
