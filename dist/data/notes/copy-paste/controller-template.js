export const myController = async (request, response) => {
    try {
        const receivedData = request.body;
        response.status(200).json({ _: "" });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error });
    }
};
//# sourceMappingURL=controller-template.js.map