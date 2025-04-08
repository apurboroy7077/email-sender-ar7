const giveNumberFromString = (myString) => {
    let matches = myString.match(/\d+/g);
    if (matches) {
        return matches.map(Number);
    }
    else {
        return [];
    }
};
export default giveNumberFromString;
//# sourceMappingURL=giveNumberFromString.js.map