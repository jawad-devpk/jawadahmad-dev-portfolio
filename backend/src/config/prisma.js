import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.js";
import { env } from "./env.js";
const adapter = new PrismaPg({
    connectionString: env.DATABASE_URL,
});
export const prisma = new PrismaClient({
    adapter,
    log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});
export async function connectDatabase() {
    try {
        await prisma.$connect();
        console.log("Database connected successfully");
    }
    catch (error) {
        console.error("Database connection failed");
        console.error(error);
        process.exit(1);
    }
}
export async function disconnectDatabase() {
    await prisma.$disconnect();
}
//# sourceMappingURL=prisma.js.map