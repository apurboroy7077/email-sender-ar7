import express from "express";
import { authenticationRouter } from "./routes/authentication/authenticationRoutes.route.js";
import { connectDB } from "./custom-functions/database/connectDB.js";
import cors from "cors";
import morgan from "morgan";
import { adminRouter } from "./routes/admin/admin.route.js";
import { userRouter } from "./routes/user/user.route.js";

const app = express(); // Create an Express app

// USING SOME BASIC PACKAGES STARTS-----------------------------------------------------------------------------------------------------------------------------

app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(morgan("dev"));

// USING SOME BASIC PACKAGES ENDS-----------------------------------------------------------------------------------------------------------------------------
// USING SOME CUSTOM MIDDLEWARE STARTS------------------------------------------------------------------------------------------------------------------
app.use((req, res, next) => {
  setTimeout(next, 0); // Introduce a delay (adjust time if needed) before passing control to the next middleware
});
// USING SOME CUSTOM MIDDLEWARE ENDS------------------------------------------------------------------------------------------------------------------

// USING ROUTES STARTS------------------------------------------------------------------------------------------------------------------------
app.use(authenticationRouter);
app.use(adminRouter);
app.use(userRouter);
// USING ROUTES ENDS------------------------------------------------------------------------------------------------------------------------

connectDB();
app.get("/", (request, response) => {
  response.send("Server Started");
});

export default app;
