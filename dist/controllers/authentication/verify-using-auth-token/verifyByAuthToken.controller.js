import { parseJwtToken } from "../../../custom-functions-2/1/parse-authentication-token/parseAuthenticationToken.js";
import { JWT_SECRET_KEY } from "../../../data/others/EnvironmentVariables.js";
import { userDataModel } from "../../../models/mongodb/bus-ticket/userSchema.model.js";
export const verifyByAuthTokenController = async (request, response) => {
    try {
        const receivedData = request.body;
        const { authToken } = receivedData;
        // PARSING AUTHTOKEN
        const userData = await parseJwtToken(authToken, JWT_SECRET_KEY);
        const { email } = userData;
        // FETCHING MORE DATA OF THIS USER
        const userData2 = await userDataModel.findOne({ email });
        if (!userData2) {
            throw new Error("User Does not Exists.");
        }
        const { username, role, _id, createdAt, updatedAt } = userData2;
        const responseData = { username, email, role, _id, createdAt, updatedAt };
        response.status(200).json(responseData);
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error });
    }
};
//# sourceMappingURL=verifyByAuthToken.controller.js.map