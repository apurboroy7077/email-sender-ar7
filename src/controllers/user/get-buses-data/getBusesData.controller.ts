import express from "express";
import { busesDataModel } from "../../../models/mongodb/bus-ticket/busSchema.model.js";

export const getBusesDataController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const busesData = await busesDataModel.find();
    response.status(200).json({ message: "Fetched Successfully", busesData });
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------

    response.status(500).json({ message: error });
  }
};
