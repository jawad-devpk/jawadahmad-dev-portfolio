import { GoogleGenAI } from "@google/genai";
import { env, isAiConfigured } from "../../config/env.js";
import { buildAiPrompt } from "./ai.prompt.js";
import { isItRelatedQuestion, nonItReply } from "./ai.guard.js";
import type { AiChatInput } from "./ai.schema.js";

const CONTACT_FOOTER_MARKER = "[SHOW_CONTACT_FOOTER]";

function getErrorStatus(error: unknown) {
  if (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    typeof error.status === "number"
  ) {
    return error.status;
  }

  return null;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unknown Gemini API error";
}

function getModelFallbacks() {
  const models = [
    env.AI_MODEL,
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
    "gemini-3.5-flash",
  ];

  return [...new Set(models.filter(Boolean))];
}

function appendJawadContactFooter(reply: string) {
  return `${reply.trim()}

For more details, you can check Jawad's portfolio or contact him directly:
🌐 Website: https://www.jawadahmad.dev
📧 Email: jawadahmad.dev.pk@gmail.com
📞 Phone: 0344-4704080

How can I assist you further? 😊`;
}

function cleanReplyAndApplyFooter(reply: string) {
  const shouldShowFooter = reply.includes(CONTACT_FOOTER_MARKER);

  const cleanedReply = reply.replaceAll(CONTACT_FOOTER_MARKER, "").trim();

  if (shouldShowFooter) {
    return appendJawadContactFooter(cleanedReply);
  }

  return cleanedReply;
}

export async function generateAiReply(input: AiChatInput) {
  const userMessage = input.message.trim();

  if (!isItRelatedQuestion(userMessage)) {
    return {
      reply: appendJawadContactFooter(nonItReply),
    };
  }

  if (!isAiConfigured || !env.GEMINI_API_KEY) {
    return {
      reply:
        "AI assistant is not configured yet. Please add a valid Gemini API key in the backend .env file.",
    };
  }

  const ai = new GoogleGenAI({
    apiKey: env.GEMINI_API_KEY,
  });

  const prompt = buildAiPrompt(userMessage);
  const modelFallbacks = getModelFallbacks();

  let lastErrorMessage = "";

  for (const model of modelFallbacks) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          temperature: 0.4,
          maxOutputTokens: 700,
        },
      });

      const reply = response.text?.trim();

      if (reply) {
        return {
          reply: cleanReplyAndApplyFooter(reply),
        };
      }
    } catch (error) {
      const status = getErrorStatus(error);
      const message = getErrorMessage(error);

      lastErrorMessage = message;

      console.error(`Gemini API error with model "${model}":`);
      console.error(error);

      if (status !== 503 && status !== 429) {
        break;
      }
    }
  }

  const busyReply =
    "AI service is busy right now. Please try again after a few seconds.";

  if (env.NODE_ENV === "development") {
    return {
      reply: appendJawadContactFooter(busyReply),
      debug: lastErrorMessage,
    };
  }

  return {
    reply: appendJawadContactFooter(busyReply),
  };
}
