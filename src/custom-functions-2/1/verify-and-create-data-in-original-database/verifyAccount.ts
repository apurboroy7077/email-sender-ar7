import { mySqlConnection } from "../../../custom-functions/database/mysql/connectMySql.js";
import saveUserDataToVerifiedDatabase from "../save-user-data-to-verified-database/saveUserDataToVerifiedDatabase.js";

const verifyAccount = (verificationCode: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const sqlQuery = `
        SELECT * FROM unverified_users_info WHERE verification_code = ?
      `;
      const values = [verificationCode];
      mySqlConnection.query(
        sqlQuery,
        values,
        async (error: any, results: any) => {
          if (error) {
            console.log(error);
          } else if (results.length > 0) {
            const { id, username, email, hashed_password, creation_time } =
              results[0];
            await saveUserDataToVerifiedDatabase(
              id,
              username,
              email,
              hashed_password,
              creation_time
            );

            resolve("Verified Account Successfully");
          } else if (results.length < 1) {
            reject("Invalid Verification Code");
          }
        }
      );
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export default verifyAccount;
