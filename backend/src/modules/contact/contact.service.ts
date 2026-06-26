
import { prisma } from "../../config/prisma.js";
import { sendContactNotification } from "../../utils/mail.js";
import type { CreateContactInput } from "./contact.schema.js";

export async function createContactMessage(input: CreateContactInput) {
  const contactMessage = await prisma.contactMessage.create({
    data: {
      name: input.name,
      email: input.email,
      location: input.location,
      budget: input.budget,
      subject: input.subject,
      message: input.message,
    },
  });

  try {
    await sendContactNotification(contactMessage);
  } catch (error) {
    console.error("Contact email notification failed:", error);
  }

  return contactMessage;
}
