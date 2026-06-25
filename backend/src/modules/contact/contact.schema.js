import { z } from "zod";
export const createContactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(80, "Name must be less than 80 characters"),
    email: z
        .string()
        .trim()
        .email("Please provide a valid email address")
        .max(120, "Email must be less than 120 characters"),
    location: z
        .string()
        .trim()
        .min(2, "Location is required")
        .max(120, "Location must be less than 120 characters"),
    budget: z
        .string()
        .trim()
        .min(1, "Budget is required")
        .max(80, "Budget must be less than 80 characters"),
    subject: z
        .string()
        .trim()
        .min(3, "Subject must be at least 3 characters")
        .max(150, "Subject must be less than 150 characters"),
    message: z
        .string()
        .trim()
        .min(10, "Message must be at least 10 characters")
        .max(2000, "Message must be less than 2000 characters"),
});
//# sourceMappingURL=contact.schema.js.map