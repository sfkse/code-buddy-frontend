import { CreateNoteData, Note, PostNoteData } from "../types/notes";
import api from "./axios";

export const getAllUserNotes = async (id: Note["owner"]): Promise<Note[]> => {
  const { data } = await api.get(`/notes/${id}`);
  return data;
};

export const saveUserNote = async (note: PostNoteData) => {
  const { data } = await api.put(`/notes/${note.owner}`, note);
  return data;
};

export const addUserNote = async (note: CreateNoteData) => {
  const { data } = await api.post(`/notes/create`, note);
  return data;
};

export const deleteUserNote = async (id: Note["idnotes"]) => {
  const { data } = await api.post(`/notes/delete/${id}`);
  return data;
};

