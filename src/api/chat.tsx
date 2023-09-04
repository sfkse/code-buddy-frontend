import api from "./axios";

export const postChatMessage = async (message: object) => {
  const { data } = await api.post(`/chat`, {
    message,
  });
  console.log(data);
  return data;
};

