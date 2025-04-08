import { readFile } from "fs";
const giveBufferFromPath = (pathOfFile) => {
    return new Promise((resolve, reject) => {
        readFile(pathOfFile, (error, buffer) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(buffer);
            }
        });
    });
};
export default giveBufferFromPath;
//# sourceMappingURL=giveBufferFromPath.js.map