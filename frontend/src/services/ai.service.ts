type AiChatSuccessResponse = {
  success: true;
  message: string;
  data: {
    reply: string;
    debug?: string;
  };
};

type AiChatErrorResponse = {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
};

type AiChatApiResponse = AiChatSuccessResponse | AiChatErrorResponse;

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function getAiErrorMessage(data: AiChatErrorResponse) {
  if (data.errors) {
    const firstError = Object.values(data.errors).flat()[0];

    if (firstError) {
      return firstError;
    }
  }

  return data.message || "Failed to get AI response.";
}

export async function sendAiMessage(message: string) {
  // const response = await fetch(`${API_URL}/ai/chat`, {
  const response = await fetch(`${API_BASE_URL}/api/ai/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = (await response.json()) as AiChatApiResponse;

  if (!response.ok || !data.success) {
    throw new Error(getAiErrorMessage(data as AiChatErrorResponse));
  }

  return data.data.reply;
}
