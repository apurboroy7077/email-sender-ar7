import getGamingData from "../../socket/functions/get-gaming-data/getGamingData.js";
import saveGamingData from "../file-system/saveGamingData.js";
import roomIdMaker from "../roomIdMaker.ts/roomIdMaker.js";
const addPlayerToRoom = (roomId, playerName) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newPlayerData = {
                name: playerName,
                id: roomIdMaker(),
                score: 0,
                lastRequestTimeStamp: Date.now(),
            };
            const dataForClient = {
                playerName: playerName,
                playerId: newPlayerData.id,
            };
            const gameData = await getGamingData();
            let isRoomExists = false;
            for (let i = 0; i < gameData.length; i++) {
                if (gameData[i].roomId === roomId) {
                    isRoomExists = true;
                    gameData[i].usersData.push(newPlayerData);
                    console.log(gameData[i]);
                    dataForClient.roomName = gameData[i].roomName;
                    dataForClient.roomId = gameData[i].roomId;
                }
            }
            if (isRoomExists === true) {
                await saveGamingData(gameData);
                resolve(dataForClient);
            }
            else {
                reject("Room Does not Exists");
            }
        }
        catch (error) {
            reject(error);
        }
    });
};
export default addPlayerToRoom;
//# sourceMappingURL=addPlayerToRoom.js.map