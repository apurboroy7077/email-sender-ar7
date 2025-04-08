const makeCountDown = (data) => {
    for (let i = 0; i < data.length; i++) {
        const singleRoomData = data[i];
        const isGameRunning = singleRoomData.gameRunningStatus === "RUNNING";
        const isTimerCreatedAlready = singleRoomData.countDownTimerTime !== undefined;
        const shouldReduceTime = typeof singleRoomData.countDownTimerTime === "number" &&
            singleRoomData.countDownTimerTime > 0;
        const shouldResetTimer = singleRoomData.countDownTimerTime === 0;
        if (isGameRunning) {
            if (!isTimerCreatedAlready) {
                singleRoomData.countDownTimerTime = 10;
            }
            else if (shouldReduceTime && singleRoomData.countDownTimerTime) {
                singleRoomData.countDownTimerTime =
                    singleRoomData.countDownTimerTime - 1;
            }
            else if (shouldResetTimer) {
                singleRoomData.countDownTimerTime = 10;
            }
        }
    }
    return data;
};
export default makeCountDown;
//# sourceMappingURL=makeCountDown.js.map