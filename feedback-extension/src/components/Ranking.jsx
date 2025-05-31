import api from "../services/api";

useEffect(() => {
  const fetchRanking = async () => {
    try {
      const response = await api.get("/ranking");
      setRanking(response.data);
    } catch (err) {
      alert("Erro ao buscar ranking");
    }
  };

  fetchRanking();
}, []);
