import express from "express";
import { getBusesDataController } from "../../controllers/user/get-buses-data/getBusesData.controller.js";
import { purchaseTicketController } from "../../controllers/user/purchase-ticket/purchaseTicket.controller.js";
import { getPurchasedTicketController } from "../../controllers/user/get-purchased-tickets/getPurchasedTickets.controller.js";
import { deleteTicketController } from "../../controllers/user/delete-ticket/deleteTicket.controller.js";

const userRouter = express.Router();
userRouter.get("/buses", getBusesDataController);
userRouter.post("/tickets/purchase", purchaseTicketController);
userRouter.post("/get-purchased-tickets", getPurchasedTicketController);
userRouter.delete("/ticket/:id/:authToken", deleteTicketController);
export { userRouter };
