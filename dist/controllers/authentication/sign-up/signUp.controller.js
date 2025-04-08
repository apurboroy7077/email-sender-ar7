import { userDataModel } from "../../../models/mongodb/bus-ticket/userSchema.model.js";
import { hashMyPassword } from "../../../custom-functions/password-hashing/hashingPassword.js";
const signUpController = async (request, response) => {
    try {
        const receivedData = request.body;
        const { username, email, password } = receivedData;
        // HASH THE PASSWORD WITH BCRYPT
        const hashedPassword = await hashMyPassword(password);
        await userDataModel.create({
            username,
            email,
            password: hashedPassword,
            role: "user",
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });
        response.status(200).json({ message: "Signed Up Successful" });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error });
    }
};
export { signUpController };
//# sourceMappingURL=signUp.controller.js.map