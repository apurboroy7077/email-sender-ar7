// import { project2DataModelMongoDbMongoose } from "../../../models/mongodb/archdune/archdune2.model.js";
export {};
// const saveEditedProject = (editedData: editProjectReceivedDataType) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const {
//         visibilityStatus,
//         projectName,
//         projectImageLink,
//         projectImageCaption,
//         category,
//         studentName,
//         projectCreationYear,
//         studioName,
//         universityName,
//         projectDescription,
//         studioTeachers,
//         typology,
//         height,
//         landArea,
//         buildArea,
//         basement,
//         videoSrc,
//         _id,
//         __v,
//         additionalFields,
//       } = editedData;
//       await project2DataModelMongoDbMongoose.findByIdAndUpdate(_id, {
//         visibilityStatus,
//         projectName,
//         projectImageLink,
//         projectImageCaption,
//         category,
//         studentName,
//         projectCreationYear,
//         studioName,
//         universityName,
//         projectDescription,
//         studioTeachers,
//         typology,
//         height,
//         landArea,
//         buildArea,
//         basement,
//         videoSrc,
//         _id,
//         __v,
//         additionalFields,
//       });
//       resolve("Saving SuccessFul");
//     } catch (error) {
//       console.log(error);
//       reject(error);
//     }
//   });
// };
// export default saveEditedProject;
// //
//# sourceMappingURL=saveEditedProject.js.map