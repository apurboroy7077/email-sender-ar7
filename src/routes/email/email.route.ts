import express from "express";
import { sendEmailFromAnotherServerController } from "../../controllers/email/sendEmail.controller.js";
const myRouter = express.Router();
myRouter.post(
  "/email/send-from-another-server",
  sendEmailFromAnotherServerController
);
export const emailRouter = myRouter;
