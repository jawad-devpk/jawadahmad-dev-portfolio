export type ContactFormPayload = {
  name: string;
  email: string;
  location: string;
  budget: string;
  subject: string;
  message: string;
};

type ContactSuccessResponse = {
  success: true;
  message: string;
  data: {
    id: string;
    createdAt: string;
  };
};

type ContactErrorResponse = {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
};

type ContactApiResponse = ContactSuccessResponse | ContactErrorResponse;

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function getApiErrorMessage(data: ContactErrorResponse) {
  if (data.errors) {
    const firstError = Object.values(data.errors).flat()[0];

    if (firstError) {
      return firstError;
    }
  }

  return data.message || "Failed to submit contact form.";
}

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<ContactSuccessResponse> {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as ContactApiResponse;

  if (!response.ok || !data.success) {
    throw new Error(getApiErrorMessage(data as ContactErrorResponse));
  }

  return data;
}
