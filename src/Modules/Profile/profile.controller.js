import { Router } from "express";
import * as profile from "../Profile/profile.service.js"
import { isAuthenticated } from "../../Middleware/authentication.middleware.js";
import isAuthorized from "../../Middleware/authorization.middleware.js"
import { roles } from "../../DB/Models/User/user.model.js";
import validation from "../../Middleware/validation.middleware.js";
import { changePassword, updateProfileSchema } from "./profile.validation.js";
const router = Router()

router.get("/profile", isAuthenticated,isAuthorized(roles.user,roles.admin) ,profile.getUserProfile)
router.patch("/profile",isAuthenticated,isAuthorized(roles.user),validation(updateProfileSchema),profile.UpdateUserProfile )
router.patch("/change-password",isAuthenticated,isAuthorized(roles.user,roles.admin),validation(changePassword),profile.updatePassword )
router.delete("/account",isAuthenticated,isAuthorized(roles.admin,roles.user),profile.deactivated)
export default router