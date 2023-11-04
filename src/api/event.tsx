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

export const joinSingleEvent = async (idEvent: string, idUser: string) => {
  const { data } = await api.post(`/events/single/${idEvent}/join`, {
    idUser,
  });
  return data;
};

export const getSingleEventParticipants = async (idEvent: string) => {
  const { data } = await api.get(`/events/single/${idEvent}/participants`);
  console.log(data);
  return data;
};

