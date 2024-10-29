export type Message = {
  id: string;
  content: string;
  user: "user" | "assistant";
  timestamps: Date;
};

export type ApiResponse = {
  message: string;
  error?: string;
};
