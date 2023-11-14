import { UserSkills } from "./user";

export interface AuthFormState {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  location?: string;
  skills?: UserSkills[];
}

export interface DiscussionFormState {
  title: string;
  description: string;
}

export interface EventFormState {
  title: string;
  description: string;
}

