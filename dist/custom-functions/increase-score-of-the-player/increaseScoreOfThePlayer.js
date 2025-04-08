import getGamingData from "../../socket/functions/get-gaming-data/getGamingData.js";
import saveGamingData from "../file-system/saveGamingData.js";
const increaseScoreOfThePlayer = async (data) => {
    const { roomId, playerId } = data;
    const gamingData = await getGamingData();
    for (let i = 0; i < gamingData.length; i++) {
        const singleRoomData = gamingData[i];
        if (roomId === singleRoomData.roomId) {
            for (let i = 0; i < singleRoomData.usersData.length; i++) {
                const singleUserData = singleRoomData.usersData[i];
                singleUserData.score = singleUserData.score + 5;
            }
        }
    }
    await saveGamingData(gamingData);
};
export default increaseScoreOfThePlayer;
//# sourceMappingURL=increaseScoreOfThePlayer.js.map