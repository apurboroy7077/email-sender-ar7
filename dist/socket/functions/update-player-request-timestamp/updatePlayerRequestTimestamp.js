import getGamingData from "../get-gaming-data/getGamingData.js";
import saveGamingData from "../../../custom-functions/file-system/saveGamingData.js";
const updatePlayerRequestTimestamp = (roomId, playerId, timeStamp) => {
    return new Promise(async (resolve, reject) => {
        if (roomId && playerId) {
            const gameData = await getGamingData();
            let roomData;
            for (let i = 0; i < gameData.length; i++) {
                const data = gameData[i];
                if (data.roomId === roomId) {
                    roomData = data;
                }
            }
            if (roomData) {
                const usersData = roomData.usersData;
                for (let i = 0; i < usersData.length; i++) {
                    const data = usersData[i];
                    if (data.id === playerId) {
                        data.lastRequestTimeStamp = Date.now();
                    }
                }
                saveGamingData(gameData);
                resolve("");
            }
            else {
                reject("Room Does not Exists");
            }
        }
        else {
            reject("RoomId or PlayerId not given");
        }
    });
};
export default updatePlayerRequestTimestamp;
//# sourceMappingURL=updatePlayerRequestTimestamp.js.map