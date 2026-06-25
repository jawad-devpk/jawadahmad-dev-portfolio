import { z } from "zod";
export declare const aiChatSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
export type AiChatInput = z.infer<typeof aiChatSchema>;
//# sourceMappingURL=ai.schema.d.ts.map