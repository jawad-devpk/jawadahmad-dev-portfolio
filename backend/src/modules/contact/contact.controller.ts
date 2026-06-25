import type { NextFunction, Request, Response } from "express";
import { createContactMessage } from "./contact.service.js";
import { createContactSchema } from "./contact.schema.js";

export async function createContactController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const validationResult = createContactSchema.safeParse(req.body);

    if (!validationResult.success) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationResult.error.flatten().fieldErrors,
      });
      return;
    }

    const contactMessage = await createContactMessage(validationResult.data);

    res.status(201).json({
      success: true,
      message: "Message submitted successfully",
      data: {
        id: contactMessage.id,
        createdAt: contactMessage.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
}
