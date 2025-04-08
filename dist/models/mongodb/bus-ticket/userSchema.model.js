import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"], // Define allowed roles
        required: true,
    },
    createdAt: {
        type: Number, // Use `Number` for timestamps in milliseconds
        required: true,
    },
    updatedAt: {
        type: Number, // Use `Number` for timestamps in milliseconds
        required: true,
    },
});
export const userDataModel = mongoose.model("usersData", userSchema);
//# sourceMappingURL=userSchema.model.js.map