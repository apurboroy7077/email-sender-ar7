import express from "express";
import { ticketsDataModel } from "../../../models/mongodb/bus-ticket/ticketSchema.js";
import { userDataModel } from "../../../models/mongodb/bus-ticket/userSchema.model.js";
import { parseJwtToken } from "../../../custom-functions-2/1/parse-authentication-token/parseAuthenticationToken.js";
import { JWT_SECRET_KEY } from "../../../data/others/EnvironmentVariables.js";

export const deleteTicketController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = request.params;
    const { id, authToken } = receivedData;
    // MAKING SURE TO ONLY DELETE IF THE PERSON WHO REQUESTED IS THE ORIGINAL TICKET OWNER
    const parsedTokenData: any = await parseJwtToken(authToken, JWT_SECRET_KEY);
    const { email } = parsedTokenData;
    const userData: any = await userDataModel.findOne({ email });
    const userId = userData._id.toString();
    await ticketsDataModel.findOneAndDelete({ _id: id, userId: userId });
    console.log("ticket deleted successfully");
    response.status(200).json({ _: "" });
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------

    response.status(500).json({ message: error });
  }
};
