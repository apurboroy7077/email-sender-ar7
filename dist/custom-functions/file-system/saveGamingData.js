import { writeFile } from "fs";
import path from "path";
const saveGamingData = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const filePath = path.join("./data/gaming-data", "gaming-data.json");
            const processedData = JSON.stringify(data);
            writeFile(filePath, processedData, "utf8", (error) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                else {
                    resolve("");
                }
            });
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
export default saveGamingData;
//# sourceMappingURL=saveGamingData.js.map