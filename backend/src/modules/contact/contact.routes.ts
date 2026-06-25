import { Router } from "express";
import { createContactController } from "./contact.controller.js";

const contactRoutes = Router();

contactRoutes.post("/", createContactController);

export default contactRoutes;
