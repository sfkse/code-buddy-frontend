import api from "./axios";

export const authenticateLogin = async (email: string, password: string) => {
  const { data } = await api.post(`/auth/login`, {
    email,
    password,
  });
  return data;
};

