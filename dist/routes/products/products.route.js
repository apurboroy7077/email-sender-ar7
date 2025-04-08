import express from "express";
import { SUB_ADDRESS_OF_GETTING_RANDOM_PRODUCTS_API, SUB_ADDRESS_OF_UPLOAD_PRODUCTS_API, } from "../../data/others/EnvironmentVariables.js";
import { getProductDetailsWithAr7idController, getRandomProducts2Controller, getRandomProductsController, productsUploadController, } from "../../controllers/products/products.controller.js";
import { SUB_ADDRESS_OF_GETTING_PRODUCT_DETAILS_WITH_AR7ID_API, SUB_ADDRESS_OF_GETTING_RANDOM_PRODUCTS_2_API, } from "../../data/others/ApiAddresses.js";
const productsRouter = express.Router();
productsRouter.post(SUB_ADDRESS_OF_UPLOAD_PRODUCTS_API, productsUploadController);
productsRouter.post(SUB_ADDRESS_OF_GETTING_RANDOM_PRODUCTS_API, getRandomProductsController);
productsRouter.post(SUB_ADDRESS_OF_GETTING_RANDOM_PRODUCTS_2_API, getRandomProducts2Controller);
productsRouter.post(SUB_ADDRESS_OF_GETTING_PRODUCT_DETAILS_WITH_AR7ID_API, getProductDetailsWithAr7idController);
export { productsRouter };
//# sourceMappingURL=products.route.js.map