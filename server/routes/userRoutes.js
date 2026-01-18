import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
    getProfile,
    updateProfile,
    addAddress,
    updateAddress,
    deleteAddress,
    changePassword
} from "../controllers/userController.js";

const router = express.Router();
 // Маршруты для управления профилем пользователя
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
// Маршруты для управления адресами пользователя
router.post("/addresses", protect, addAddress);
router.put("/addresses/:id", protect, updateAddress);
router.delete("/addresses/:id", protect, deleteAddress);

router.put("/password", protect, changePassword);

export default router;
