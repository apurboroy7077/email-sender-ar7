import mongoose from "mongoose";
import { busTicketDatabaseUrl } from "../../data/environment-variables/environmentVariables.js";

const connectDB = async () => {
  await mongoose
    .connect(busTicketDatabaseUrl)
    .then((response) => {
      console.log("Database is Connected");
    })
    .catch((error: any) => {
      console.log(error);
      setTimeout(() => {
        // connectDB();
      }, 3000);
    });
};
export { connectDB };
