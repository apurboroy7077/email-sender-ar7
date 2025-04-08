import { writeFile } from "fs";
import path from "path";
import giveBufferFromPath from "../give-buffer-of-file/giveBufferFromPath.js";
const saveFileToLocalDirectory = async (file_) => {
    const myFile = file_[0];
    const fileName = myFile.originalFilename;
    const oldPath = myFile.filepath;
    const newPath = path.join(__dirname, fileName);
    const fileBuffer = await giveBufferFromPath(oldPath);
    console.log(fileBuffer);
    writeFile(newPath, fileBuffer, (error) => {
        console.log(error);
    });
};
export default saveFileToLocalDirectory;
//# sourceMappingURL=saveFileToLocalDirectory.js.map