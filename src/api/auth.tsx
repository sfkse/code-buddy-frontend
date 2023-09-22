import api from "./axios";

export const authenticateLogin = async (email: string, password: string) => {
  const jsonData = JSON.stringify({
    email: email,
    password: password,
  });
  const { data } = await api.post(`/auth/login`, jsonData);
  return data;
};

export const authenticateRegister = async (
  email: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const { data } = await api.post(`/auth/register`, {
      email,
      password,
      confirmPassword,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

