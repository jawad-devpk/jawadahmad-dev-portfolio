import { Router } from "express";
import { aiChatController } from "./ai.controller.js";

const aiRoutes = Router();

aiRoutes.post("/chat", aiChatController);

export default aiRoutes;
