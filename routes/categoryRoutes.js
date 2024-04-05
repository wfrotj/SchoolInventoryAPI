import express from "express";
import categoryController from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.getCategories);
categoryRouter.get("/:id", categoryController.getCategory);
categoryRouter.post("/", categoryController.createCategory);
categoryRouter.put("/:id", categoryController.editCategory);
categoryRouter.delete("/:id", categoryController.deleteCategory);

export default categoryRouter;
