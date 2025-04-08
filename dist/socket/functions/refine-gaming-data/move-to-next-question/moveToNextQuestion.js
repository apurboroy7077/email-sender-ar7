const moveToNextQuestion = (data) => {
    for (let i = 0; i < data.length; i++) {
        const singleRoomData = data[i];
        const allQuestionsData = singleRoomData.allQuestions;
        const currentQuestionData = singleRoomData.currentQuestionData;
        let nextQuestionDataAR7 = null;
        for (let i = 0; i < allQuestionsData.length; i++) {
            const singleQuestion = allQuestionsData[i];
            if (singleQuestion.question === currentQuestionData.question) {
                const nextQuestionIndex = i + 1;
                const nextQuestionData = allQuestionsData[nextQuestionIndex];
                if (nextQuestionData) {
                    nextQuestionDataAR7 = nextQuestionData;
                }
            }
        }
        const shouldMoveToNextQuestion = singleRoomData.countDownTimerTime === 0 && nextQuestionDataAR7;
        if (shouldMoveToNextQuestion) {
            singleRoomData.currentQuestionData = nextQuestionDataAR7;
        }
    }
    return data;
};
export default moveToNextQuestion;
//# sourceMappingURL=moveToNextQuestion.js.map