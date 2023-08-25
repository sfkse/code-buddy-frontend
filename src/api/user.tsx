import api from "./axios";
import { User } from "../types/user";

export const getUser = async (id: string) => {
  try {
    const { data } = await api.get<User>(`/user/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

