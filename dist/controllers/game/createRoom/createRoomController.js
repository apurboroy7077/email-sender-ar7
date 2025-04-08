import createRoom from "../../../custom-functions/create-room/createRoom.js";
const createRoomController = async (request, response) => {
    try {
        const receivedData = await request.body;
        console.log(receivedData);
        const { roomName, playerName } = receivedData;
        const myData = (await createRoom(roomName, playerName));
        const { roomId, playerId } = myData;
        const dataForClient = {
            roomName: roomName,
            roomId: roomId,
            playerId: playerId,
            message: "Room Successfully Created!",
        };
        response.status(201).send(dataForClient);
    }
    catch (error) {
        response.status(500).send("Error Creating Room");
    }
};
export default createRoomController;
//# sourceMappingURL=createRoomController.js.map