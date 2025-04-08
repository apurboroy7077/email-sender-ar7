import express from "express";
import { createTableControllerOfMySql } from "../../controllers/mySql/create-table/createTable.controller.js";
const mySqlRouter = express.Router();
mySqlRouter.post("/mysql/create-table", createTableControllerOfMySql);
export { mySqlRouter };
//# sourceMappingURL=mysql.route.js.map