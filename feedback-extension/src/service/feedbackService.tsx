// src/service/feedbackService.ts

export interface FeedbackData {
  text: string;             // Mensagem do feedback
  tags?: string[];          // Tags associadas ao feedback (ex: ["elogio"])
  anon?: boolean;           // Indica se é anônimo
  receiverUser?: string;    // Usuário que vai receber o feedback (@username)
  channel?: string;         // Canal do Slack (opcional)
}

export const FeedbackService = {
  sendFeedback: async (data: FeedbackData) => {
    const response = await fetch("http://localhost:3000/feedback/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer user1_token" // Token fake (substituir no futuro)
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Erro ao enviar feedback");
    }

    return response.json(); // Retorno esperado da API (opcionalmente usado)
  }
};
