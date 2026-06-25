import { z } from "zod";
const envSchema = z.object({
    NODE_ENV: z
        .enum(["development", "production", "test"])
        .default("development"),
    PORT: z.coerce.number().int().positive().default(5000),
    DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
    FRONTEND_URL: z.string().min(1).default("http://localhost:5173"),
    SMTP_HOST: z.string().optional(),
    SMTP_PORT: z.coerce.number().int().positive().default(587),
    SMTP_USER: z.string().optional(),
    SMTP_PASS: z.string().optional(),
    MAIL_FROM: z.string().optional(),
    MAIL_TO: z.string().email().optional(),
    GEMINI_API_KEY: z.string().optional(),
    AI_MODEL: z.string().default("gemini-3.5-flash"),
});
const parsedEnv = envSchema.safeParse(process.env);
if (!parsedEnv.success) {
    console.error("Invalid environment variables:");
    console.error(parsedEnv.error.flatten().fieldErrors);
    process.exit(1);
}
export const env = parsedEnv.data;
export const allowedFrontendOrigins = env.FRONTEND_URL.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
export const isEmailConfigured = Boolean(env.SMTP_HOST &&
    env.SMTP_USER &&
    env.SMTP_PASS &&
    env.MAIL_FROM &&
    env.MAIL_TO);
export const isAiConfigured = Boolean(env.GEMINI_API_KEY && env.GEMINI_API_KEY !== "your_gemini_api_key");
//# sourceMappingURL=env.js.map