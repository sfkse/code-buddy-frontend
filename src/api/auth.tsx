import { AuthFormState } from "../types/form";
import api from "./axios";

export const authenticateLogin = async (formState: AuthFormState) => {
  const jsonData = JSON.stringify({
    ...formState,
  });
  const { data } = await api.post(`/auth/login`, jsonData);
  return data;
};

export const authenticateRegister = async (formState: AuthFormState) => {
  const { data } = await api.post(`/auth/register`, {
    ...formState,
  });
  return data;
};

