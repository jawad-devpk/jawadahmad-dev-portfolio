import type { CreateContactInput } from "./contact.schema.js";
export declare function createContactMessage(input: CreateContactInput): Promise<{
    message: string;
    name: string;
    subject: string;
    email: string;
    location: string;
    budget: string;
    id: string;
    status: import("../../../generated/prisma/enums.js").ContactStatus;
    createdAt: Date;
    updatedAt: Date;
}>;
//# sourceMappingURL=contact.service.d.ts.map