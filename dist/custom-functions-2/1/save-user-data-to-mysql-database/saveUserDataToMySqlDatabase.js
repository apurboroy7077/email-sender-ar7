import ar7id from "../../../custom-functions/ar7id/ar7id.js";
import { mySqlConnection } from "../../../custom-functions/database/mysql/connectMySql.js";
import { hashMyPassword } from "../../../custom-functions/password-hashing/hashingPassword.js";
const saveUserDataToMySqlDatabase = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { userName, userEmail, userPassword } = data;
            const hashedPassword = await hashMyPassword(userPassword);
            const timeStamp = Date.now();
            const myId = ar7id();
            const sqlQuery = `
  INSERT INTO user_info (id, username, email, hashed_password, creation_time)
  VALUES (?, ?, ?, ?, ?)
`;
            const sqlValues = [myId, userName, userEmail, hashedPassword, timeStamp];
            mySqlConnection.query(sqlQuery, sqlValues, (error) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                else {
                    console.log("Sign up successful.");
                    resolve("Signed Up Successful.");
                }
            });
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
export default saveUserDataToMySqlDatabase;
//# sourceMappingURL=saveUserDataToMySqlDatabase.js.map