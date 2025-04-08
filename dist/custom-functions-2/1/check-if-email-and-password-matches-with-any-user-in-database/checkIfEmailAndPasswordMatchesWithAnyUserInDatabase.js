// import { mySqlConnection } from "../../../custom-functions/database/mysql/connectMySql.js";
// import {
//   checkMyPasswordVersion2,
//   checkPassword,
// } from "../../../custom-functions/password-hashing/hashingPassword.js";
// import giveUserDataFromSqlDatabaseByEmail from "../give-user-data-from-sql-database-by-email/giveUserDataFromSqlDatabaseByEmail.js";
export {};
// const checkIfEmailAndPasswordMatchesWithAnyUserInDatabase = (
//   email: string,
//   password: string
// ) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const userData: any = await giveUserDataFromSqlDatabaseByEmail(email);
//       const { hashed_password } = userData;
//       await checkMyPasswordVersion2(password, hashed_password);
//       resolve("User Verified Successfully");
//     } catch (error) {
//       console.log(error);
//       reject(error);
//     }
//   });
// };
// export default checkIfEmailAndPasswordMatchesWithAnyUserInDatabase;
// //
//# sourceMappingURL=checkIfEmailAndPasswordMatchesWithAnyUserInDatabase.js.map