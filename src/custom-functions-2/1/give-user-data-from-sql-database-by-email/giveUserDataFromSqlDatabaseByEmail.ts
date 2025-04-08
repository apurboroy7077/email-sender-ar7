import { mySqlConnection } from "../../../custom-functions/database/mysql/connectMySql.js";

const giveUserDataFromSqlDatabaseByEmail = (email: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const sqlQuery = `SELECT * FROM user_info WHERE email = ?`;
      const sqlValues = [email];
      mySqlConnection.query(sqlQuery, sqlValues, (error: any, result: any) => {
        if (error) {
          console.log(error);
          reject(error);
        } else if (result.length > 0) {
          resolve(result[0]);
        } else {
          console.log(result);
          reject("No User In Database");
        }
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export default giveUserDataFromSqlDatabaseByEmail;
