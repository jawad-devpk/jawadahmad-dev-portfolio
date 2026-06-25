import { z } from "zod";
export declare const createContactSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    location: z.ZodString;
    budget: z.ZodString;
    subject: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
export type CreateContactInput = z.infer<typeof createContactSchema>;
//# sourceMappingURL=contact.schema.d.ts.map