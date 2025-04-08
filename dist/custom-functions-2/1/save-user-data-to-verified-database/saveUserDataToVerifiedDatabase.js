import { mySqlConnection } from "../../../custom-functions/database/mysql/connectMySql.js";
const saveUserDataToVerifiedDatabase = (id, username, email, hashed_password, creation_time) => {
    return new Promise(async (resolve, reject) => {
        try {
            const sqlQueryToSaveData = `
  INSERT INTO user_info (id, username, email, hashed_password, creation_time)
  VALUES (?, ?, ?, ?, ?)
`;
            const valuesTosave = [
                id,
                username,
                email,
                hashed_password,
                creation_time,
            ];
            mySqlConnection.query(sqlQueryToSaveData, valuesTosave, (error) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                else {
                    console.log("Verified Account Successfully");
                    resolve("Verified Account Successfully");
                }
            });
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
export default saveUserDataToVerifiedDatabase;
//# sourceMappingURL=saveUserDataToVerifiedDatabase.js.map