import type { AiChatInput } from "./ai.schema.js";
export declare function generateAiReply(input: AiChatInput): Promise<{
    reply: string;
    debug?: never;
} | {
    reply: string;
    debug: string;
}>;
//# sourceMappingURL=ai.service.d.ts.map