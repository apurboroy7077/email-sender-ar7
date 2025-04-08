import express from "express";
import { busesDataModel } from "../../../models/mongodb/bus-ticket/busSchema.model.js";
import { parseJwtToken } from "../../../custom-functions-2/1/parse-authentication-token/parseAuthenticationToken.js";
import { userDataModel } from "../../../models/mongodb/bus-ticket/userSchema.model.js";
import { JWT_SECRET_KEY } from "../../../data/others/EnvironmentVariables.js";

export const createBusController = async (
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
      authToken,
    } = receivedData;
    const parsedTokenData: any = await parseJwtToken(authToken, JWT_SECRET_KEY);
    const { email } = parsedTokenData;
    const userData: any = await userDataModel.findOne({ email });
    // THROW ERROR IF NOT ADMIN
    if (userData.role !== "admin") {
      throw new Error("User is not admin");
    }
    // CREATE NEW BUS
    await busesDataModel.create({
      name,
      description,
      capacity,
      departureTime,
      ticketPrice,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    console.log("Bus created successfully");
    response.status(200).json({ _: "" });
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------

    response.status(500).json({ message: error });
  }
};
