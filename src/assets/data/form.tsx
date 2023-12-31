import { UserAccountSettingsFormFields } from "../../types/user";

export const loginFormFields = [
  {
    placeholder: "Email",
    type: "email",
    name: "email",
  },
  {
    placeholder: "Password",
    type: "password",
    name: "password",
  },
];
export const registerFormFields = [
  {
    placeholder: "Email*",
    type: "email",
    name: "email",
  },
  {
    placeholder: "Fistname*",
    type: "text",
    name: "firstName",
  },
  {
    placeholder: "Lastname*",
    type: "text",
    name: "lastName",
  },
  {
    placeholder: "Password*",
    type: "password",
    name: "password",
  },
  {
    placeholder: "Confirm Password*",
    type: "password",
    name: "confirmPassword",
  },
];

export const accountSettingsFormFields: UserAccountSettingsFormFields[] = [
  {
    label: "Email*",
    placeholder: "email@example.com",
    type: "email",
    name: "email",
  },
  {
    label: "Fistname*",
    placeholder: "Fellow",
    type: "text",
    name: "firstname",
  },
  {
    label: "Lastname*",
    placeholder: "Coders",
    type: "text",
    name: "lastname",
  },
];

