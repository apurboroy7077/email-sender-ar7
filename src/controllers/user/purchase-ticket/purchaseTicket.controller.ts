import express from "express";
import { parseJwtToken } from "../../../custom-functions-2/1/parse-authentication-token/parseAuthenticationToken.js";
import { JWT_SECRET_KEY } from "../../../data/others/EnvironmentVariables.js";
import { userDataModel } from "../../../models/mongodb/bus-ticket/userSchema.model.js";
import { busesDataModel } from "../../../models/mongodb/bus-ticket/busSchema.model.js";
import { ticketsDataModel } from "../../../models/mongodb/bus-ticket/ticketSchema.js";

export const purchaseTicketController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = request.body;
    const { authToken, busId } = receivedData;
    const parsedTokenData: any = await parseJwtToken(authToken, JWT_SECRET_KEY);
    const { email } = parsedTokenData;
    // FIND ID OF THE USER WHO REQUESTED
    const userData: any = await userDataModel.findOne({ email });
    let { _id } = userData;
    const userId = _id.toString();
    // FIND INFORMATION OF THE BUS
    const busData: any = await busesDataModel.findById(busId);
    const { ticketPrice, departureTime } = busData;
    // // CHECK IF THE USER HAS ALREADY BOUGHT TICKET OF THIS BUS
    // const boughtTicket = await ticketsDataModel.findOne({ userId, busId });
    // if (boughtTicket) {
    //   throw new Error("User Already Bought ticket of this bus");
    // }
    //SAVE TICKET IN TICKET DATABASE
    await ticketsDataModel.create({
      busId,
      userId,
      price: ticketPrice,
      departureTime,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    console.log("Ticket Purchased Successfully");
    response.status(200).json({ _: "" });
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------

    response.status(500).json({ message: error });
  }
};
