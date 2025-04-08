import { readFile } from "fs";
import path from "path";
const getUsersData = () => {
    return new Promise((resolve, reject) => {
        try {
            const filePath = path.join("./data/usersData", "usersData.json");
            readFile(filePath, "utf8", (error, data) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                else {
                    resolve(JSON.parse(data));
                }
            });
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
export default getUsersData;
//# sourceMappingURL=getUsersData.js.map