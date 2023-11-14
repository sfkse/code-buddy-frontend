import { CreateDiscussion } from "../types/discussions";
import api from "./axios";
export const getAllDiscussions = async () => {
  const { data } = await api.get(`/discussions/all`);
  return data;
};

export const getAllDiscussionComments = async (discussionId: string) => {
  const { data } = await api.get(`/discussions/${discussionId}/comments`);
  return data;
};

export const getSingleDiscussion = async (discussionId: string) => {
  const { data } = await api.get(`/discussions/${discussionId}`);
  return data;
};

export const getUserDiscussions = async (userId: string) => {
  const { data } = await api.get(`/discussions/user/${userId}`);
  return data;
};

export const createDiscussion = async (data: CreateDiscussion) => {
  console.log(data);
  const { data: response } = await api.post(`/discussions/create`, data);
  return response;
};

export const createComment = async (data: any) => {
  const { data: response } = await api.post(
    `/discussions/${data.iddiscussions}/comment`,
    data
  );
  return response;
};

