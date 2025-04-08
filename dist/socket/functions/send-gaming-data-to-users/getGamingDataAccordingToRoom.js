import getGamingData from "../get-gaming-data/getGamingData.js";
const getGamingDataAccordingToRoom = async (roomId) => {
    return new Promise(async (resolve, reject) => {
        const wholeData = (await getGamingData());
        const matchedData = wholeData.filter((data) => data.roomId === roomId);
        if (matchedData.length > 0) {
            resolve(matchedData[0]);
        }
        else {
            resolve(null);
        }
    });
};
export default getGamingDataAccordingToRoom;
//# sourceMappingURL=getGamingDataAccordingToRoom.js.map