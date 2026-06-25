import { z } from "zod";
export const aiChatSchema = z.object({
    message: z
        .string()
        .trim()
        .min(2, "Message must be at least 2 characters")
        .max(1000, "Message must be less than 1000 characters"),
});
//# sourceMappingURL=ai.schema.js.map