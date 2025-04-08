import express from "express";
import { crashServerController, testController, testController2, } from "../../controllers/test/test.controller.js";
const testingRouter = express.Router();
testingRouter.get("/test/1", testController);
testingRouter.get("/test/2", testController2);
testingRouter.get("/crash-server", crashServerController);
export { testingRouter };
//# sourceMappingURL=testingRouter.route.js.map