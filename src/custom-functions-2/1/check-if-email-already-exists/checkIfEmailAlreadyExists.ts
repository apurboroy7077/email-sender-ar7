import { mySqlConnection } from "../../../custom-functions/database/mysql/connectMySql.js";

const checkIfEmailAlreadyExistsInUsersData = (email: string) => {
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
            reject("THIS_EMAIL_ALREADY_EXISTS");
          } else if (result.length < 1) {
            resolve("");
          }
        }
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
export { checkIfEmailAlreadyExistsInUsersData };
