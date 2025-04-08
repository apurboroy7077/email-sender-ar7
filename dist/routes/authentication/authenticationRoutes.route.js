import express from "express";
import { signUpController } from "../../controllers/authentication/sign-up/signUp.controller.js";
import { loginController } from "../../controllers/authentication/login/login.controller.js";
import { verifyByAuthTokenController } from "../../controllers/authentication/verify-using-auth-token/verifyByAuthToken.controller.js";
const authenticationRouter = express.Router();
authenticationRouter.post("/authentication/sign-up", signUpController);
authenticationRouter.post("/authentication/login", loginController);
authenticationRouter.post("/authentication/verify-authtoken", verifyByAuthTokenController);
// authenticationRouter.post(
//   "/authentication/verify-account",
//   verifyAccountController
// );
// authenticationRouter.post(
//   "/authentication/get-user-data-by-authentication-token",
//   getUserDataByAuthenticationTokenController
// );
export { authenticationRouter };
//# sourceMappingURL=authenticationRoutes.route.js.map