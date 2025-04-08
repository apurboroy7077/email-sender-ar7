import { userDataModel } from "../../../models/mongodb/bus-ticket/userSchema.model.js";
import { checkMyPassword } from "../../../custom-functions/password-hashing/hashingPassword.js";
import giveAuthenticationToken from "../../../custom-functions/give-authentication-token/giveAuthenticationToken.js";
export const loginController = async (request, response) => {
    try {
        const receivedData = request.body;
        const { email, password } = receivedData;
        const userData = await userDataModel.findOne({ email });
        // THROW ERROR IF USER DOES NOT EXISTS
        if (!userData) {
            throw new Error("User Does Not Exists");
        }
        const hashedPassword = userData.password;
        // CHECK IF PASSWORD MATCHES WITH HASHED PASSWORD, IT WILL THROW ERROR IF NOT MATCHED
        await checkMyPassword(password, hashedPassword);
        // CREATE JWT TOKEN
        const authToken = await giveAuthenticationToken(email);
        response.status(200).json({ message: "Login Successful", authToken });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error });
    }
};
//# sourceMappingURL=login.controller.js.map