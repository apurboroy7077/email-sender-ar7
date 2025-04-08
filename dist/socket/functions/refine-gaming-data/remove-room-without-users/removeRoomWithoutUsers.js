const removeRoomWithoutUsers = (data) => {
    const processedData = [];
    for (let i = 0; i < data.length; i++) {
        const singleRoomData = data[i];
        if (singleRoomData.usersData.length > 0) {
            processedData.push(singleRoomData);
        }
    }
    return processedData;
};
export default removeRoomWithoutUsers;
//# sourceMappingURL=removeRoomWithoutUsers.js.map