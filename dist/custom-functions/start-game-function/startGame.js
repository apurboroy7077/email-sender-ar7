import startGameOfTheRoom from "./start-game-of-the-room/startGameOfTheRoom.js";
const startGame = (dataFromClient) => {
    const { roomId, playerId } = dataFromClient;
    startGameOfTheRoom(roomId);
};
export default startGame;
//# sourceMappingURL=startGame.js.map