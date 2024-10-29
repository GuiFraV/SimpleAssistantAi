import { ApiResponse } from "../types";

const API_URL = "https://api.openassistant.xyz/v1/chat";

export const sendMessage = async (message: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        system_prompt:
          "You are a useful assistant AI who provide clear and concise response",
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error("Network failed");
    }

    const data = await response.json();
    return { message: data.response };
  } catch (error) {
    console.error("Error", error);
    return {
      message: "Could find a response, try another thing",
      error: error instanceof Error ? error.message : "Serveur response failed",
    };
  }
};
