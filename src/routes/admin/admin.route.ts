import express from "express";
import { createBusController } from "../../controllers/admin/create-bus/createBus.controller.js";
import { editBusController } from "../../controllers/admin/edit-bus/editBus.controller.js";

const adminRouter = express.Router();
adminRouter.post("/admin/bus", createBusController);
adminRouter.put("/admin/bus/:id", editBusController);

export { adminRouter };
