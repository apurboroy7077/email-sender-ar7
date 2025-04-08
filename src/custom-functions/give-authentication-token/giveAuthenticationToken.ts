import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../../data/others/EnvironmentVariables.js";

const giveAuthenticationToken = (email: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const forSaving = { email: email };
      const authenticationToken = await jwt.sign(forSaving, JWT_SECRET_KEY, {
        expiresIn: "1y",
      });
      resolve(authenticationToken);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export default giveAuthenticationToken;
