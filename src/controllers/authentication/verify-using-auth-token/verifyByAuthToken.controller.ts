import express from "express";
import { parseJwtToken } from "../../../custom-functions-2/1/parse-authentication-token/parseAuthenticationToken.js";
import { JWT_SECRET_KEY } from "../../../data/others/EnvironmentVariables.js";
import giveUserDataFromSqlDatabaseByEmail from "../../../custom-functions-2/1/give-user-data-from-sql-database-by-email/giveUserDataFromSqlDatabaseByEmail.js";
import { userDataModel } from "../../../models/mongodb/bus-ticket/userSchema.model.js";

export const verifyByAuthTokenController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = request.body;

    const { authToken } = receivedData;
    // PARSING AUTHTOKEN
    const userData: any = await parseJwtToken(authToken, JWT_SECRET_KEY);
    const { email } = userData;
    // FETCHING MORE DATA OF THIS USER
    const userData2 = await userDataModel.findOne({ email });
    if (!userData2) {
      throw new Error("User Does not Exists.");
    }

    const { username, role, _id, createdAt, updatedAt } = userData2;
    const responseData = { username, email, role, _id, createdAt, updatedAt };
    response.status(200).json(responseData);
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------

    response.status(500).json({ message: error });
  }
};
