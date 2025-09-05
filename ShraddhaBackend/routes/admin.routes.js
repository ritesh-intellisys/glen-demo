import express from "express";
import { 
  getAdminData, 
  updateAdminData, 
  getAccountTypes, 
  getDepositStatistics 
} from "../controllers/admin.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

router.get("/data", getAdminData);
router.put("/data", updateAdminData);
router.get("/account-types", getAccountTypes);
router.get("/statistics", getDepositStatistics);

export default router;
