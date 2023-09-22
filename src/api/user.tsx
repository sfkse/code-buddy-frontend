import api from "./axios";
import { User } from "../types/user";

export const getSingleUser = async (id: string): Promise<User | undefined> => {
  const { data } = await api.get(`/users/single/${id}`);
  return data;
};

export const getAllUsers = async (): Promise<User[] | undefined> => {
  const { data } = await api.get(`/users/all`);
  return data;
};

