import { EventFormState } from "../types/form";
import api from "./axios";

export const createEvent = async (event: EventFormState) => {
  const { data } = await api.post(`/events/create`, event);
  return data;
};

export const getAllEvents = async () => {
  const { data } = await api.get(`/events/all`);
  return data;
};

export const getSingleEvent = async (id: string) => {
  const { data } = await api.get(`/events/single/${id}`);
  return data;
};

//TODO: Fix this.
export const joinSingleEvent = async (idEvent: string, idUser: string) => {
  console.log(idEvent, idUser);
  const { data } = await api.post(`/events/single/${idEvent}/join`, {
    idUser: [JSON.stringify(idUser)],
  });
  return data;
};

