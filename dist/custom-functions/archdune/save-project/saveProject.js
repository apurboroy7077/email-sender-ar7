// import { project2DataModelMongoDbMongoose } from "../../../models/mongodb/archdune/archdune2.model.js";
// import processProjectData from "./process-project-data/processProjectData.js";
// import saveAndGiveAdditionalFieldsImagesLink from "./save-and-give-additional-field-images-link/saveAndGiveAdditionalFieldsImagesLink.js";
// import saveAndGiveProjectImageLink from "./save-project-image-and-give-link/saveAndGiveProjectImageLink.js";
export {};
// const saveProject = async (fields: any, files: any) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const projectImageLink = await saveAndGiveProjectImageLink(files);
//       const additionalFieldsImagesLink =
//         await saveAndGiveAdditionalFieldsImagesLink(fields, files);
//       // const projectImageLink =
//       //   "https://res.cloudinary.com/dpmnackpf/image/upload/v1717725130";
//       // const additionalFieldsImagesLink = {
//       //   additionalField0Image0File:
//       //     "https://res.cloudinary.com/dpmnackpf/image/upload/v1717724924/archdune/qs56qhb0xhgoecc0dhlb.png",
//       //   additionalField1Image0File:
//       //     "https://res.cloudinary.com/dpmnackpf/image/upload/v1717724926/archdune/w4ma1ihrjn8m4ywlw9eu.webp",
//       //   additionalField1Image1File:
//       //     "https://res.cloudinary.com/dpmnackpf/image/upload/v1717724927/archdune/gr7gm2r1xqsdqistakke.png",
//       // };
//       const processedData = processProjectData(
//         projectImageLink,
//         additionalFieldsImagesLink,
//         fields
//       );
//       await project2DataModelMongoDbMongoose.create(processedData);
//       resolve("Successfully Uploaded Project");
//     } catch (error) {
//       reject(error);
//     }
//   });
// };
// export default saveProject;
//# sourceMappingURL=saveProject.js.map