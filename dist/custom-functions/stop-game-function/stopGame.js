import stopTheGameOfTheRoom from "./stop-it/stopTheGameNow.js";
const stopGame = (dataFromClient) => {
    const { roomId } = dataFromClient;
    stopTheGameOfTheRoom(roomId);
};
export default stopGame;
//# sourceMappingURL=stopGame.js.map