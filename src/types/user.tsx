export interface User {
  idusers: string;
  email: string;
  firstname: string;
  lastname: string;
  created_at: number;
  updated_at: number;
  user_type: number;
  location: string;
  skills: string;
}

export interface AuthFormState {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  location?: string;
  skills?: string;
}

