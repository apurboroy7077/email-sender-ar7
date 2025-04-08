const testController = (request, response) => {
    let i = 0;
    console.log("This is Test 1");
    response.send("This is Test ");
};
const testController2 = (request, response) => {
    let i = 0;
    console.log("This is Test Controller 2");
    response.send("This is Test Controller 2");
};
const crashServerController = (request, response) => {
    process.exit(1);
    throw new Error("Intentional Crash For Testing Purposes");
};
export { testController, testController2, crashServerController };
//# sourceMappingURL=test.controller.js.map