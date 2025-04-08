const processImageData = (data, fields) => {
    const fieldImages = [];
    const separatedData = [];
    for (let i = 0; i < data.length; i++) {
        const serialString = `Image${i}`;
        const myObjectData = [];
        for (let i = 0; i < data.length; i++) {
            const myData = data[i];
            if (myData.includes(serialString)) {
                myObjectData.push(myData);
            }
        }
        separatedData.push(myObjectData);
    }
    const separatedData2 = [];
    for (let i = 0; i < separatedData.length; i++) {
        const myData = separatedData[i];
        if (myData.length > 0) {
            separatedData2.push(myData);
        }
    }
    for (let i = 0; i < separatedData2.length; i++) {
        const data = separatedData2[i];
        const myObjectData = {};
        for (let i = 0; i < data.length; i++) {
            const key = data[i];
            if (key.includes("Caption")) {
                myObjectData.caption = fields[key][0];
            }
            else if (key.includes("File")) {
                myObjectData.imageSrc = fields[key];
            }
        }
        fieldImages.push(myObjectData);
    }
    return fieldImages;
};
export default processImageData;
//# sourceMappingURL=processImageData.js.map