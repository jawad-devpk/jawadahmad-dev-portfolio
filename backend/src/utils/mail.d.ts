type ContactMailPayload = {
    name: string;
    email: string;
    location: string;
    budget: string;
    subject: string;
    message: string;
    createdAt: Date;
};
export declare function sendContactNotification(contact: ContactMailPayload): Promise<void>;
export {};
//# sourceMappingURL=mail.d.ts.map