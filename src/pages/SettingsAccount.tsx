import styled, { ThemeContext } from "styled-components";
import { FiSave } from "react-icons/fi";

import Button from "../components/Button";

import { accountSettingsFormFields } from "../assets/data/form";
import SelectMultipleOptions from "../components/notes/SelectMultipleOptions";
import { useEffect, useState } from "react";
import { fetchCredentials } from "../utils/userUtils";
import { useFetchSingleUser } from "../hooks/user/useFetchSingleUser";
import {
  UserAccountSettings,
  UserAccountSettingsFormFields,
} from "../types/user";
import Loader from "../components/Loader";
import ToastMessage from "../components/ToastMessage";
import useUpdateSingleUser from "../hooks/user/useUpdateSingleUser";

const SettingsAccount = () => {
  const [formState, setFormState] = useState<UserAccountSettings>({
    email: "",
    firstname: "",
    lastname: "",
    skills: [],
    location: "",
  });
  const userID = fetchCredentials();
  const { user, isLoading, error } = useFetchSingleUser(userID);
  const { mutate, data, errorUserUpdate, isLoadingUserUpdate } =
    useUpdateSingleUser(userID, {
      email: formState.email,
      firstname: formState.firstname,
      lastname: formState.lastname,
      skills: formState.skills,
      location: formState.location,
    });

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setFormState({
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        skills: user.skills,
        location: user.location,
      });
    }
  }, [user]);

  const handleOnChangeFields = (
    e: any,
    field: UserAccountSettingsFormFields
  ) => {
    setFormState({ ...formState, [field.name]: e.target.value });
  };
  const handleOnChangeSkills = (e: any) => {
    console.log(e);
    setFormState({ ...formState, skills: e });
  };
  const handleOnSubmit = () => {
    mutate();
  };
  console.log(formState);
  return (
    <Loader isLoading={isLoading}>
      {errorUserUpdate ? (
        <ToastMessage
          text={errorUserUpdate instanceof Error ? errorUserUpdate.message : ""}
        />
      ) : null}
      <SettingsAccountWrapper>
        <SettingsAccountTitle>Account</SettingsAccountTitle>
        <SettingsAccountForm>
          {accountSettingsFormFields.map(
            (field: UserAccountSettingsFormFields) => (
              <SettingsAccountItem key={field.name}>
                <SettingsAccountLabel>{field.label}</SettingsAccountLabel>
                <SettingsAccountInput
                  disabled={field.name === "email"}
                  type={field.type}
                  value={Object.keys(user).length > 0 && user[field.name]}
                  placeholder={field.placeholder}
                  onChange={(e) => handleOnChangeFields(e, field)}
                  $disabled={field.name === "email"}
                />
              </SettingsAccountItem>
            )
          )}
          <SettingsAccountLabel>Skills</SettingsAccountLabel>
          <SelectAccountSkills
            placeholder="Enter your skills..."
            handleOnChangeSelect={handleOnChangeSkills}
            options={[]}
            value={formState.skills}
          />
        </SettingsAccountForm>
        <Button
          title="SAVE"
          icon={<FiSave />}
          variant="primary"
          customStyle={{ alignSelf: "flex-end" }}
          onClick={handleOnSubmit}
        />
      </SettingsAccountWrapper>
    </Loader>
  );
};

export default SettingsAccount;

const SettingsAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const SettingsAccountTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.heading.base};
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SettingsAccountForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SettingsAccountItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SettingsAccountLabel = styled.label`
  font-size: ${({ theme }) => theme.font.body.xs};
`;

const SettingsAccountInput = styled.input<{ $disabled: boolean }>`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.25rem;
  font-size: ${({ theme }) => theme.font.body.base};
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.secondary : "transparent"};
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryExtraLight};
    font-size: ${({ theme }) => theme.font.body.xs};
  }
`;

const SelectAccountSkills = styled(SelectMultipleOptions)`
  position: absolute;
  z-index: 10;
  margin-bottom: 1rem;
`;

