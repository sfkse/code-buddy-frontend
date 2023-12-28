import api from "./axios";
import { User, UserAccountSettings } from "../types/user";

export const getSingleUser = async (id: string): Promise<User[]> => {
  const { data } = await api.get(`/users/single/${id}`);
  return data;
};

export const getAllUsers = async (): Promise<User[]> => {
  const { data } = await api.get(`/users/all`);
  return data;
};

export const updateSingleUser = async (
  id: string,
  user: UserAccountSettings
): Promise<User[] | undefined> => {
  const { data } = await api.put(`/users/single/${id}`, user);
  return data;
};

