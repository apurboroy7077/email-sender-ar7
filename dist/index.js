import server from "./app.js";
import { EXPRESS_SERVER_PORT } from "./data/environment-variables/environmentVariables.js";
server.listen(EXPRESS_SERVER_PORT, () => {
    console.log(`Express server is running on http://localhost:${EXPRESS_SERVER_PORT}`);
});
export default server;
//# sourceMappingURL=index.js.map