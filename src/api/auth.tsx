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
  console.log(formState);
  const { data } = await api.post(`/auth/register`, {
    ...formState,
  });
  return data;
};

export const setUserRegistered = async (idUser: string) => {
  const { data } = await api.post(`/auth/setuserregistered`, { idUser });
  return data;
};

export const getLoggedInStatus = async () => {
  const { data } = await api.get(`/auth/authuser`);
  return data;
};

export const logoutUser = async () => {
  const { data } = await api.post(`/auth/logout`);
  return data;
};

