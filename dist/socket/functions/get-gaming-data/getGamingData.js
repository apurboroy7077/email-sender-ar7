import { readFile } from "fs";
import path from "path";
const getGamingData = () => {
    return new Promise((resolve, reject) => {
        try {
            const filePath = path.join("./data/gaming-data", "gaming-data.json");
            readFile(filePath, "utf8", (error, data) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                else {
                    if (data) {
                        const dataAR7 = JSON.parse(data);
                        resolve(dataAR7);
                    }
                    else {
                        resolve([]);
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
export default getGamingData;
//# sourceMappingURL=getGamingData.js.map