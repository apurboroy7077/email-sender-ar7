import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../../data/others/EnvironmentVariables.js";
const getUserAr7idFromToken = (request) => {
    return new Promise((resolve, reject) => {
        try {
            const { authenticationToken } = request.body;
        }
        catch (error) { }
    });
};
const authorizeAndGiveReceivedData = (request) => {
    const receivedData = request.body;
    const { authenticationToken } = receivedData;
    const processedDataOfToken = jwt.verify(authenticationToken, JWT_SECRET_KEY);
    const ar7idOfUserWhoRequested = processedDataOfToken.ar7id;
    delete receivedData.authenticationToken;
    receivedData.ar7idOfUserWhoRequested = ar7idOfUserWhoRequested;
    return receivedData;
};
export { getUserAr7idFromToken, authorizeAndGiveReceivedData };
//# sourceMappingURL=authentication.js.map