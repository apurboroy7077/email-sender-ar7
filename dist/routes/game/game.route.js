import express from "express";
import createRoomController from "../../controllers/game/createRoom/createRoomController.js";
import joinRoomController from "../../controllers/game/join-room/joinRoomController.js";
const gameRouter = express.Router();
gameRouter.post("/create-room", createRoomController);
gameRouter.post("/join-room", joinRoomController);
export default gameRouter;
//# sourceMappingURL=game.route.js.map