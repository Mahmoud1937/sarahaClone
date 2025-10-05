
import { Router } from "express";
import { isAuthenticated } from "../../Middleware/authentication.middleware.js";
import isAuthorized from "../../Middleware/authorization.middleware.js";
import { roles } from "../../DB/Models/User/user.model.js";
import validation from "../../Middleware/validation.middleware.js"
import * as messageSchemas from "./message.validation.js";
import * as messageService from "./message.service.js"
const router =Router()


//send message
router.post("/",isAuthenticated,isAuthorized(roles.user),validation(messageSchemas.sendMessageSchema),messageService.sendMessage)
// get single message
router.get("/:id",isAuthenticated,isAuthorized(roles.user),validation(messageSchemas.getMessageSchema),messageService.readMessage)

// read all messages
router.get("/",isAuthenticated,isAuthorized(roles.user),validation(messageSchemas.getAllMessageSchema),messageService.readAllMessages)


export default router