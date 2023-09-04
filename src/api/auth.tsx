import api from "./axios";

export const authenticateLogin = async (email: string, password: string) => {
  const { data } = await api.post(`/auth/login`, {
    email,
    password,
  });
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

