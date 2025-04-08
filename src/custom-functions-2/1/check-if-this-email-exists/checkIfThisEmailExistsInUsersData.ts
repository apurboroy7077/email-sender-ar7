import { mySqlConnection } from "../../../custom-functions/database/mysql/connectMySql.js";

export const checkAndMakeSureThisEmailExists = (email: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const sqlQuery = `SELECT * FROM user_info WHERE email = ?`;
      const sqlValues = [email];
      mySqlConnection.query(sqlQuery, sqlValues, (error: any, result: any) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          if (result.length > 0) {
            resolve(true);
          } else if (result.length < 1) {
            console.log("User With This Email Does Not Exists.");
            reject("User With This Email Does Not Exists.");
          }
        }
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
