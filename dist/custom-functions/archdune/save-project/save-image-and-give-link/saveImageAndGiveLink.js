import { v2 as cloudinary } from "cloudinary";
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME, } from "../../../../data/archdune/variables/ArchduneVariables.js";
cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});
const saveImageAndGiveLink = (file) => {
    return new Promise((resolve, reject) => {
        try {
            const filePath = file.filepath;
            cloudinary.uploader
                .upload(filePath, { folder: "/archdune" })
                .then((result) => {
                const imageLink = result.secure_url;
                resolve(imageLink);
            })
                .catch((error) => {
                reject(error);
            });
        }
        catch (error) {
            reject(error);
        }
    });
};
export default saveImageAndGiveLink;
//# sourceMappingURL=saveImageAndGiveLink.js.map