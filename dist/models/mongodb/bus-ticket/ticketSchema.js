import mongoose from "mongoose";
const ticketSchema = new mongoose.Schema({
    busId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    departureTime: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Number,
        required: true,
    },
    updatedAt: {
        type: Number,
        required: true,
    },
});
export const ticketsDataModel = mongoose.model("Ticket", ticketSchema);
//# sourceMappingURL=ticketSchema.js.map