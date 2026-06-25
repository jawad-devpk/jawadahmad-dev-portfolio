export declare const env: {
    NODE_ENV: "development" | "production" | "test";
    PORT: number;
    DATABASE_URL: string;
    FRONTEND_URL: string;
    SMTP_PORT: number;
    AI_MODEL: string;
    SMTP_HOST?: string | undefined;
    SMTP_USER?: string | undefined;
    SMTP_PASS?: string | undefined;
    MAIL_FROM?: string | undefined;
    MAIL_TO?: string | undefined;
    GEMINI_API_KEY?: string | undefined;
};
export declare const allowedFrontendOrigins: string[];
export declare const isEmailConfigured: boolean;
export declare const isAiConfigured: boolean;
//# sourceMappingURL=env.d.ts.map