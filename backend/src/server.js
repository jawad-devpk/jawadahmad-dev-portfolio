import "dotenv/config";
import app from "./app.js";
import { connectDatabase, disconnectDatabase } from "./config/prisma.js";
import { env } from "./config/env.js";
async function startServer() {
    await connectDatabase();
    const server = app.listen(env.PORT, () => {
        console.log(`Server is running on http://localhost:${env.PORT}`);
    });
    const shutdown = async (signal) => {
        console.log(`${signal} received. Closing server...`);
        server.close(async () => {
            await disconnectDatabase();
            console.log("Server closed successfully");
            process.exit(0);
        });
    };
    process.on("SIGINT", () => {
        void shutdown("SIGINT");
    });
    process.on("SIGTERM", () => {
        void shutdown("SIGTERM");
    });
}
void startServer();
//# sourceMappingURL=server.js.map