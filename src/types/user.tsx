export interface User {
  idusers: string;
  active: boolean;
  registered: boolean;
  email: string;
  firstname: string;
  lastname: string;
  created: number;
  updated: number;
  user_type?: number;
  location: string;
  skills: UserSkills[];
}
export interface UserAccountSettings {
  email: string;
  firstname: string;
  lastname: string;
  skills: UserSkills[];
  location: string;
}

export interface UserSkills {
  label: string;
  value: string;
}

export interface UserAccountSettingsFormFields {
  label: string;
  placeholder: string;
  type: string;
  name: string;
}

