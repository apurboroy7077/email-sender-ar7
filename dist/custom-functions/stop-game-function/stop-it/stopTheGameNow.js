import getGamingData from "../../../socket/functions/get-gaming-data/getGamingData.js";
import saveGamingData from "../../file-system/saveGamingData.js";
const stopTheGameOfTheRoom = async (roomId) => {
    const gameData = await getGamingData();
    for (let i = 0; i < gameData.length; i++) {
        const singleRoomData = gameData[i];
        if (singleRoomData.roomId === roomId) {
            singleRoomData.gameRunningStatus = "NOT_RUNNING";
        }
    }
    await saveGamingData(gameData);
};
export default stopTheGameOfTheRoom;
//# sourceMappingURL=stopTheGameNow.js.map