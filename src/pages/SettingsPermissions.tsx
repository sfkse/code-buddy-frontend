import styled from "styled-components";
import Switch from "react-switch";
import { useState } from "react";

const SettingsPermissions = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(true);

  const handleOnAllowMessages = () => {
    setChecked(!checked);
  };

  const handleOnAllowStatus = () => {
    setChecked2(!checked2);
  };

  return (
    <SettingsPermissionsWrapper>
      <SettingsPermissionsTitle>Permissions</SettingsPermissionsTitle>
      <SettingsPermissionsContent>
        <SettingsPermissionsContentItem>
          <SettingsPermissionsContentItemTitle>
            Allow to get messages
          </SettingsPermissionsContentItemTitle>
          <Switch
            checked={checked}
            width={50}
            height={22}
            onHandleColor="#e0e2db"
            onChange={handleOnAllowMessages}
          />
        </SettingsPermissionsContentItem>
        <SettingsPermissionsContentItem>
          <SettingsPermissionsContentItemTitle>
            Show online status to others
          </SettingsPermissionsContentItemTitle>
          <Switch
            checked={checked2}
            width={50}
            height={22}
            onHandleColor="#e0e2db"
            onChange={handleOnAllowStatus}
          />
        </SettingsPermissionsContentItem>
      </SettingsPermissionsContent>
    </SettingsPermissionsWrapper>
  );
};

export default SettingsPermissions;

const SettingsPermissionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 2rem;
`;

const SettingsPermissionsTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.heading.base};
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SettingsPermissionsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SettingsPermissionsContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

const SettingsPermissionsContentItemTitle = styled.label`
  font-size: ${({ theme }) => theme.font.body.base};
`;

