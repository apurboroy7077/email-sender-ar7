import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../../data/others/EnvironmentVariables.js";
import { processedDataOfAuthenticationToken } from "../../data/others/types.js";
const getUserAr7idFromToken = (request: express.Request) => {
  return new Promise((resolve, reject) => {
    try {
      const { authenticationToken } = request.body;
    } catch (error) {}
  });
};
const authorizeAndGiveReceivedData = (request: express.Request) => {
  const receivedData = request.body;
  const { authenticationToken } = receivedData;
  const processedDataOfToken = jwt.verify(
    authenticationToken,
    JWT_SECRET_KEY
  ) as processedDataOfAuthenticationToken;
  const ar7idOfUserWhoRequested = processedDataOfToken.ar7id;
  delete receivedData.authenticationToken;
  receivedData.ar7idOfUserWhoRequested = ar7idOfUserWhoRequested;
  return receivedData;
};
export { getUserAr7idFromToken, authorizeAndGiveReceivedData };
