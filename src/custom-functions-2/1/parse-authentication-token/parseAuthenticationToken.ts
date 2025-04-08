import jwt, { JwtPayload } from "jsonwebtoken";

export const parseJwtToken = (token: string, secretKey: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await jwt.verify(token, secretKey);
      resolve(data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
