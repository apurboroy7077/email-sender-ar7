import verifyAccount from "../../../custom-functions-2/1/verify-and-create-data-in-original-database/verifyAccount.js";
const verifyAccountController = async (request, response) => {
    try {
        const receivedData = request.body;
        const { verificationCode } = receivedData;
        await verifyAccount(verificationCode);
        response.status(200).send({ _: "" });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send({ message: error });
    }
};
export { verifyAccountController };
//# sourceMappingURL=verifyAccount.controller.js.map