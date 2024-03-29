import styled from "styled-components";
import Card from "../../ui/Card";
import Icons from "../../ui/Icons";
import DropdownMenu from "../../ui/DropdownMenu";
import { useState } from "react";
import Modal from "../../ui/Modal";
import AddNoteForm from "./AddNoteForm";

function NoteCard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteToBeEdited, setNoteToBeEdited] = useState({
    id: "",
    title: "",
    description: "",
  });
  const menuItems = [
    {
      name: "Edit",
      icon: <Icons.Edit />,
      onClick: () => {
        console.log("object");
        setNoteToBeEdited(noteToBeEdited);
        setIsModalOpen(true);
      },
    },
    { name: "Download", icon: <Icons.Download /> },
    { name: "Delete", icon: <Icons.Bin /> },
  ];

  return (
    <>
      <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
        <AddNoteForm />
      </Modal>
      <Card>
        <Card.Body>
          <NoteTitleWrapper>
            <NoteTitle>My first note</NoteTitle>
            <ActionsWrapper>
              <Icons.Pin />
              <DotsWrapper onClick={() => setIsDropdownOpen(true)}>
                <Icons.ActionDots style={iconStyle} />
                <DropdownMenu
                  isOpen={isDropdownOpen}
                  setIsOpen={setIsDropdownOpen}
                  menuItems={menuItems}
                />
              </DotsWrapper>
            </ActionsWrapper>
          </NoteTitleWrapper>
          <NoteDescription>
            This is my first note. I'm very excited to use this app.
          </NoteDescription>
        </Card.Body>
        <Card.Footer>
          <SharedStatus>
            <Icons.SignalSm />
            Shared
          </SharedStatus>
          <ReminderStatus>
            <Icons.Calendar />
            Remind me
          </ReminderStatus>
        </Card.Footer>
      </Card>
    </>
  );
}

export default NoteCard;

const NoteTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NoteTitle = styled.h2`
  margin: 0;
  font-size: var(--font-size-regular);
`;

const ActionsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const DotsWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: var(--color-orange-light);
  }
`;

const NoteDescription = styled.p`
  margin: 0.5rem 0;
  color: var(--color-black);
`;

const SharedStatus = styled.div`
  font-size: var(--font-size-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-grey-dark);
`;

const ReminderStatus = styled.div`
  font-size: var(--font-size-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-grey-dark);
`;

const iconStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

