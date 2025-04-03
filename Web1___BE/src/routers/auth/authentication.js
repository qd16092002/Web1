import express from "express";
import {
  getAllUser1,
  getAllUser2,
  postSignUp,
  postSignUp2,
} from "./authController.js";
const router = express.Router();
router.use(express.json());

// Đăng ký tài khoản
router.post("/user-signup", postSignUp);
router.post("/user-signup2", postSignUp2);
router.get("/get-all-user", getAllUser1);
router.get("/get-all-user2", getAllUser2);
export default router;
