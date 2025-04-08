import jwt from "jsonwebtoken";
import { ARCHDUNE_ADMIN_JWT_KEY } from "../../data/archdune/variables/ArchduneVariables.js";
const ArchDuneCheckAdmin = (request) => {
    const { adminToken } = request.body;
    jwt.verify(adminToken, ARCHDUNE_ADMIN_JWT_KEY);
};
export const ArchDuneCheckAdminFromForm = (fields) => {
    const adminToken = fields.adminToken[0];
    const data = jwt.verify(adminToken, ARCHDUNE_ADMIN_JWT_KEY);
};
export default ArchDuneCheckAdmin;
//# sourceMappingURL=ArchDuneCheckAdmin.js.map