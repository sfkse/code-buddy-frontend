import styled from "styled-components";
import { FiSave } from "react-icons/fi";

import Button from "../components/Button";

import { accountSettingsFormFields } from "../assets/data/form";
import SelectMultipleOptions from "../components/notes/SelectMultipleOptions";
import { useEffect, useState } from "react";
import { useFetchAuthUser } from "../hooks/user/useFetchAuthUser";
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
  const { authUser } = useFetchAuthUser();
  const { mutate, error, isPending } = useUpdateSingleUser(authUser.idusers);

  useEffect(() => {
    if (Object.keys(authUser).length > 0) {
      setFormState({
        email: authUser.email,
        firstname: authUser.firstname,
        lastname: authUser.lastname,
        skills: authUser.skills,
        location: authUser.location,
      });
    }
  }, [authUser]);

  const handleOnChangeFields = (
    e: any,
    field: UserAccountSettingsFormFields
  ) => {
    setFormState({ ...formState, [field.name]: e.target.value });
  };
  const handleOnChangeSkills = (e: any) => {
    setFormState({ ...formState, skills: e });
  };
  const handleOnSubmit = () => {
    mutate({
      email: formState.email,
      firstname: formState.firstname,
      lastname: formState.lastname,
      skills: formState.skills,
      location: formState.location,
    });
  };
  console.log(isPending);
  return (
    <>
      <Loader isLoading={isPending}>
        {error ? (
          <ToastMessage text={error instanceof Error ? error.message : ""} />
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
                    value={
                      Object.keys(authUser).length > 0 && authUser[field.name]
                    }
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
    </>
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

