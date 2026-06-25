import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import { allowedFrontendOrigins, env } from "./config/env.js";
import {
  errorMiddleware,
  notFoundMiddleware,
} from "./middlewares/error.middleware.js";
import contactRoutes from "./modules/contact/contact.routes.js";
import aiRoutes from "./modules/ai/ai.routes.js";

const app = express();

const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many contact requests. Please try again after 15 minutes.",
  },
});

const aiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many AI requests. Please try again after 15 minutes.",
  },
});

app.use(helmet());

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedFrontendOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`CORS blocked request from origin: ${origin}`));
    },
    credentials: true,
  }),
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

if (env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running",
  });
});

app.use("/api/contact", contactRateLimiter, contactRoutes);
app.use("/api/ai", aiRateLimiter, aiRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
