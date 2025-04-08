import { readFile } from "fs";

type giveBufferFromPathType = (pathOfFile: string) => Promise<Buffer>;
const giveBufferFromPath: giveBufferFromPathType = (pathOfFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathOfFile, (error, buffer) => {
      if (error) {
        reject(error);
      } else {
        resolve(buffer);
      }
    });
  });
};

export default giveBufferFromPath;
