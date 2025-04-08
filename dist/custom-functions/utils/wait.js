const wait = (miliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("");
        }, miliseconds);
    });
};
export default wait;
//# sourceMappingURL=wait.js.map