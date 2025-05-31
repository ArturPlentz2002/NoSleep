import api from "../services/api"; 

const handleSend = async () => {
  try {
    await api.post("/feedback", {
      fromUser: "usuarioFake", 
      toUser,
      message,
    });
    alert("Feedback enviado com sucesso!");
  } catch (err) {
    alert("Erro ao enviar feedback.");
  }
};
