// import express from "express";
// import { projectsDataModelMongoDbMongoose } from "../../models/mongodb/archdune/archdune.model.js";
// import mongoose from "mongoose";
// import { project2DataModelMongoDbMongoose } from "../../models/mongodb/archdune/archdune2.model.js";
// export const giveProjectDataController = async (
//   request: express.Request,
//   response: express.Response
// ) => {
//   try {
//     const receivedData = request.body;
//     const projectData = await project2DataModelMongoDbMongoose.find({});
export {};
//     response
//       .status(200)
//       .json({ message: "Fetched Sucessfully", data: projectData });
//   } catch (error: any) {
//     // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
//     response.status(500).json({ message: error.message });
//   }
// };
// export const giveProjectDataForClientController = async (
//   request: express.Request,
//   response: express.Response
// ) => {
//   try {
//     const receivedData = request.body;
//     const projectData = await project2DataModelMongoDbMongoose.find({
//       visibilityStatus: "VISIBLE",
//     });
//     response
//       .status(200)
//       .json({ message: "Fetched Sucessfully", data: projectData });
//   } catch (error: any) {
//     // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
//     response.status(500).json({ message: error.message });
//   }
// };
// export const giveProjectDataBasedOnIdController = async (
//   request: express.Request,
//   response: express.Response
// ) => {
//   try {
//     const receivedData = request.body;
//     const { projectId } = receivedData;
//     const projectData = await project2DataModelMongoDbMongoose.findById(
//       projectId
//     );
//     response
//       .status(200)
//       .json({ message: "Fetched Sucessfully", data: projectData });
//   } catch (error: any) {
//     // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
//     response.status(500).json({ message: error.message });
//   }
// };
//# sourceMappingURL=projects.controller.js.map