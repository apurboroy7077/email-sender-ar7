import saveUserDataToMySqlDatabase from "../../../custom-functions-2/1/save-user-data-to-mysql-database/saveUserDataToMySqlDatabase.js";
const createTableControllerOfMySql = async (request, response) => {
    try {
        const receivedData = request.body;
        await saveUserDataToMySqlDatabase(receivedData);
        response.json({ test: "test" });
    }
    catch (error) {
        console.log(error);
        response.status(500).send(error.message);
    }
};
export { createTableControllerOfMySql };
//# sourceMappingURL=createTable.controller.js.map