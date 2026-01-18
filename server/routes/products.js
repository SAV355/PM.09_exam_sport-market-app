import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

router.post(
    "/",
    upload.array("images", 5),      // до 5 фото
    createProduct
);

router.put(
    "/:id",
    upload.array("images", 5),
    updateProduct
);

router.delete("/:id", deleteProduct);

export default router;
