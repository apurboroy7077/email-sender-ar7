import { questionsData } from "../../data/questions/questionsData.js";
const giveRandomQuestion = (numberOfQuestions) => {
    const choosenQuestions = [];
    for (let i = 0; i < questionsData.length; i++) {
        const index = Math.floor(Math.random() * questionsData.length);
        const theChoosenOne = questionsData[index];
        let isDuplicate = false;
        for (let i = 0; i < choosenQuestions.length; i++) {
            const alreadyChoosenOne = choosenQuestions[i];
            if (alreadyChoosenOne === theChoosenOne) {
                isDuplicate = true;
            }
        }
        if (isDuplicate === false)
            choosenQuestions.push(theChoosenOne);
        if (choosenQuestions.length >= numberOfQuestions) {
            break;
        }
    }
    return choosenQuestions;
};
export default giveRandomQuestion;
//
//# sourceMappingURL=giveRandomQuestion.js.map