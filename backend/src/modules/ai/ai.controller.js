import { generateAiReply } from "./ai.service.js";
import { aiChatSchema } from "./ai.schema.js";
export async function aiChatController(req, res, next) {
    try {
        const validationResult = aiChatSchema.safeParse(req.body);
        if (!validationResult.success) {
            res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: validationResult.error.flatten().fieldErrors,
            });
            return;
        }
        const result = await generateAiReply(validationResult.data);
        res.status(200).json({
            success: true,
            message: "AI response generated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=ai.controller.js.map