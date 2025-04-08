import express from "express";
import { parseJwtToken } from "../../../custom-functions-2/1/parse-authentication-token/parseAuthenticationToken.js";
import { JWT_SECRET_KEY } from "../../../data/others/EnvironmentVariables.js";
import { userDataModel } from "../../../models/mongodb/bus-ticket/userSchema.model.js";
import { busesDataModel } from "../../../models/mongodb/bus-ticket/busSchema.model.js";

export const editBusController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = request.body;
    const {
      name,
      description,
      capacity,
      departureTime,
      ticketPrice,
      id,
      authToken,
    } = receivedData;
    const parsedTokenData: any = await parseJwtToken(authToken, JWT_SECRET_KEY);
    const { email } = parsedTokenData;
    const userData: any = await userDataModel.findOne({ email });
    // THROW ERROR IF NOT ADMIN
    if (userData.role !== "admin") {
      throw new Error("User is not admin");
    }
    // SAVE NEW DATA
    console.log(receivedData);
    await busesDataModel.findByIdAndUpdate(id, {
      name,
      description,
      capacity,
      departureTime,
      ticketPrice,
    });
    response.status(200).json({ message: "Bus Updated Successfully" });
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------

    response.status(500).json({ message: error });
  }
};
