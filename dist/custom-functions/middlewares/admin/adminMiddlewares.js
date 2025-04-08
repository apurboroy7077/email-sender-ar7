const checkIsAdmin = (request) => {
    return new Promise(async (resolve, reject) => {
        try {
            // const receivedData = request.body;
            // const { authenticationToken } = receivedData;
            // const processedDataOfToken = (await jwt.verify(
            //   authenticationToken,
            //   JWT_SECRET_KEY
            // )) as processedDataOfAuthenticationToken;
            // const ar7idOfTheUserWhoMadeRequest = processedDataOfToken.ar7id;
            // // CHECK IF THE USER WHO MADE THIS REQUEST IS ADMIN OR NOT-------------------------------------------------------------------------------
            // // ----------------------------------------------------------------------------------------------------------
            // const userDataInAdminDatabase = await adminDataModelMongoDbMongoose.find({
            //   ar7idOfTheAdmin: ar7idOfTheUserWhoMadeRequest,
            // });
            // if (userDataInAdminDatabase.length < 1) {
            //   reject("User is Not Admin");
            // }
            // resolve("User is Admin, Successfully Verified.");
        }
        catch (error) {
            reject(error);
        }
    });
};
const checkIsAdmin2 = (request, response, next) => {
    return new Promise((resolve, reject) => {
        const theFunction2 = async (request, response, next) => {
            try {
                // const receivedData = request.body;
                // const { authenticationToken } = receivedData;
                // const processedDataOfToken = (await jwt.verify(
                //   authenticationToken,
                //   JWT_SECRET_KEY
                // )) as processedDataOfAuthenticationToken;
                // const ar7idOfTheUserWhoMadeRequest = processedDataOfToken.ar7id;
                // // CHECK IF THE USER WHO MADE THIS REQUEST IS ADMIN OR NOT-------------------------------------------------------------------------------
                // // ----------------------------------------------------------------------------------------------------------
                // const userDataInAdminDatabase =
                //   await adminDataModelMongoDbMongoose.find({
                //     ar7idOfTheAdmin: ar7idOfTheUserWhoMadeRequest,
                //   });
                // if (userDataInAdminDatabase.length < 1) {
                //   throw new Error("User is Not Admin");
                // }
                // resolve("");
                // next();
            }
            catch (error) {
                console.log(error);
                reject(error);
                return;
            }
        };
        theFunction2(request, response, next);
    });
};
export { checkIsAdmin, checkIsAdmin2 };
//
//# sourceMappingURL=adminMiddlewares.js.map