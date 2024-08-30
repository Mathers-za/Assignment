import express from "express";
import * as controller from "../controllers/nelsonMandelaLogic.js";
const router = express.Router();

router.post("/convertString", controller.processString);

export default router;
