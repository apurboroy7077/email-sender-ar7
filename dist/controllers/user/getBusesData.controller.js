import { busesDataModel } from "../../models/mongodb/bus-ticket/busSchema.model.js";
export const getBusesDataController = async (request, response) => {
    try {
        const busesData = await busesDataModel.find();
        response.status(200).json({ message: "Fetched Successfully", busesData });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error });
    }
};
//# sourceMappingURL=getBusesData.controller.js.map