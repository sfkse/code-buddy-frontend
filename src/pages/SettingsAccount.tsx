import styled, { ThemeContext } from "styled-components";
import { FiSave } from "react-icons/fi";

import Button from "../components/Button";

import { accountSettingsFormFields } from "../assets/data/form";
import SelectMultiple from "../components/SelectMultiple";
import { useContext } from "react";

const SettingsAccount = () => {
  const themeContext = useContext(ThemeContext);
  const fetchSkills = () => {
    return [
      {
        color: themeContext?.colors.primaryExtraLight,
        label: "General",
        value: "General",
      },
      {
        color: themeContext?.colors.primaryExtraLight,
        label: "Work",
        value: "Work",
      },
      {
        color: themeContext?.colors.primaryExtraLight,
        label: "Personal",
        value: "Personal",
      },
    ];
  };
  return (
    <SettingsAccountWrapper>
      <SettingsAccountTitle>Account</SettingsAccountTitle>
      <SettingsAccountForm>
        {accountSettingsFormFields.map((field) => (
          <SettingsAccountItem key={field.name}>
            <SettingsAccountLabel>{field.label}</SettingsAccountLabel>
            <SettingsAccountInput
              type={field.type}
              placeholder={field.placeholder}
            />
          </SettingsAccountItem>
        ))}
        <SelectAccountSkills
          options={fetchSkills()}
          placeholder="Put your skills..."
        />
      </SettingsAccountForm>
      <Button
        title="SAVE"
        icon={<FiSave />}
        variant="primary"
        customStyle={{ alignSelf: "flex-end" }}
      />
    </SettingsAccountWrapper>
  );
};

export default SettingsAccount;

const SettingsAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const SettingsAccountTitle = styled.h2`
  font-size: 1.5rem;
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
  font-size: 0.8rem;
`;

const SettingsAccountInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.25rem;
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryExtraLight};
    font-size: 0.8rem;
  }
`;

const SelectAccountSkills = styled(SelectMultiple)`
  position: absolute;
  z-index: 10;
  margin-bottom: 1rem;
`;

