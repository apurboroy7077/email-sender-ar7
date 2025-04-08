import ar7id from "../../../custom-functions/ar7id/ar7id.js";
import { mySqlConnection } from "../../../custom-functions/database/mysql/connectMySql.js";
import { hashMyPassword } from "../../../custom-functions/password-hashing/hashingPassword.js";
import random7DigitsNumber from "../../utils/random7DigitsNumber.js";
const storeDataToUnverifiedUsersDatabase = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("Storing data in unverified people's database");
            const { userName, userEmail, userPassword } = data;
            const hashedPassword = await hashMyPassword(userPassword);
            const timeStamp = Date.now();
            const myId = ar7id();
            const verificationCode = random7DigitsNumber();
            const sqlQuery = `
  INSERT INTO unverified_users_info (id, verification_code, username, email, hashed_password, creation_time)
  VALUES (?, ?, ?, ?, ?, ?)
`;
            const sqlValues = [
                myId,
                verificationCode,
                userName,
                userEmail,
                hashedPassword,
                timeStamp,
            ];
            mySqlConnection.query(sqlQuery, sqlValues, (error) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                else {
                    console.log("Verification Code Generated Successfully.");
                    console.log(verificationCode);
                    resolve(verificationCode);
                }
            });
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
export { storeDataToUnverifiedUsersDatabase };
//# sourceMappingURL=storeDataToUnverifiedUsersDatabase.js.map