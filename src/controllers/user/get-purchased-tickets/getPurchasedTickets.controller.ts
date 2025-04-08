import express from "express";
import { parseJwtToken } from "../../../custom-functions-2/1/parse-authentication-token/parseAuthenticationToken.js";
import { JWT_SECRET_KEY } from "../../../data/others/EnvironmentVariables.js";
import { userDataModel } from "../../../models/mongodb/bus-ticket/userSchema.model.js";
import { ticketsDataModel } from "../../../models/mongodb/bus-ticket/ticketSchema.js";

export const getPurchasedTicketController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = request.body;
    const { authToken } = receivedData;
    // VERIFY AUTHTOKEN
    const parsedTokenData: any = await parseJwtToken(authToken, JWT_SECRET_KEY);
    const { email } = parsedTokenData;
    // GET USER ID
    const userData: any = await userDataModel.findOne({ email });
    const { _id } = userData;
    const userId = _id.toString();
    // GET TICKETS PURCHASED BY THIS USER
    const ticketsBoughtByUser = await ticketsDataModel.find({ userId });
    console.log("get purchased ticket request received");
    response.status(200).json({
      message: "Purchased Tickets Fetched Successfully",
      ticketsBoughtByUser,
    });
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------

    response.status(500).json({ message: error });
  }
};
