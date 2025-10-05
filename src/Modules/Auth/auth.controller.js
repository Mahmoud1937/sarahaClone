import { Router } from "express";
import * as authService from "../Auth/services/auth.service.js"
import asyncHandler from "../../utils/ErorrHandler/asyncHandler.js";
import validation from "../../Middleware/validation.middleware.js";
import * as authSchema from "./auth.validation.js"
const router = Router()
router.post("/register", validation(authSchema.registerSchema), asyncHandler(authService.signUpservice))
router.post("/login", validation(authSchema.loginSchema), asyncHandler(authService.loginService))
router.get("/activate-account/:token", asyncHandler(authService.activateEmail))
router.get("/accessToken", authService.refreshToken)

export default router