import express from "express";
import { checkIfEmailAlreadyExistsInUsersData } from "../../../custom-functions-2/1/check-if-email-already-exists/checkIfEmailAlreadyExists.js";
import { storeDataToUnverifiedUsersDatabase } from "../../../custom-functions-2/1/store-data-to-unverified-users-database/storeDataToUnverifiedUsersDatabase.js";
import { sendVerificationCodeToUser } from "../../../custom-functions-2/1/send-verification-code-to-user/sendVerificationCodeToUser.js";
import { userDataModel } from "../../../models/mongodb/bus-ticket/userSchema.model.js";
import { hashMyPassword } from "../../../custom-functions/password-hashing/hashingPassword.js";

const signUpController = async (
  request: express.Request,
  response: express.Response
) => {
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
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
    response.status(500).json({ message: error });
  }
};

export { signUpController };
