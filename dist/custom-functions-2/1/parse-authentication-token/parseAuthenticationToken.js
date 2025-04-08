import jwt from "jsonwebtoken";
export const parseJwtToken = (token, secretKey) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await jwt.verify(token, secretKey);
            resolve(data);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
//# sourceMappingURL=parseAuthenticationToken.js.map