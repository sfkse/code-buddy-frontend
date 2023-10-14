import { styled } from "styled-components";
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";
import { SlOptions } from "react-icons/sl";
import { RxAvatar } from "react-icons/rx";

import Card from "../Card";

const ContactStatus = () => {
  return (
    <Card title="Your Contacts" style={{ flex: 1 }}>
      <ContactStatusRow>
        <ContactStatusFirstCol>
          <ContactLogo />
          <ContactName>John Doe</ContactName>
        </ContactStatusFirstCol>
        <ContactStatueSecondCol>
          <ContactStatusText>
            <HiOutlineStatusOnline
              style={{ color: "green", paddingTop: "1px", marginRight: "11px" }}
            />
            Active
          </ContactStatusText>
          <SlOptions />
        </ContactStatueSecondCol>
      </ContactStatusRow>
      <ContactStatusRow>
        <ContactStatusFirstCol>
          <ContactLogo />
          <ContactName> Kevin John Doe</ContactName>
        </ContactStatusFirstCol>
        <ContactStatueSecondCol>
          <ContactStatusText>
            <HiOutlineStatusOffline
              style={{ color: "red", paddingTop: "1px", marginRight: "6px" }}
            />
            Offline
          </ContactStatusText>
          <SlOptions />
        </ContactStatueSecondCol>
      </ContactStatusRow>
    </Card>
  );
};

export default ContactStatus;

const ContactStatusRow = styled.div`
  display: flex;

  gap: 1rem;
  justify-content: space-between;
`;
const ContactStatusFirstCol = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContactStatueSecondCol = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`;

const ContactLogo = styled(RxAvatar)`
  width: 2rem;
  height: 2rem;
`;

const ContactName = styled.div`
  font-size: 1rem;
`;

const ContactStatusText = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryLight};
`;

