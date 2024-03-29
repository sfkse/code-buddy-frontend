import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import Icons from "../../ui/Icons";
import Modal from "../../ui/Modal";
import MainWrapper from "../../ui/MainWrapper";

function Tags() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <MainWrapper>
      <Header>
        <AddButton onClick={() => setIsModalOpen(true)}>
          <Icons.Create />
          ADD TAGS
        </AddButton>
      </Header>
      <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
        <AddTagForm />
      </Modal>
      <TagsList>
        <TagItem>
          <TagTitle>Personal</TagTitle>
        </TagItem>
      </TagsList>
    </MainWrapper>
  );
}

export default Tags;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const AddButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TagsList = styled.div`
  display: flex;
  gap: 1rem;
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--color-black);
`;

const TagTitle = styled.p`
  font-size: var(--font-size-sm);
`;

const AddTagForm = () => {
  return (
    <FormWrapper>
      <Form>
        <Label htmlFor="tag">Tag name</Label>
        <Input type="text" id="tag" placeholder="Tag name" />
        <Label htmlFor="color">Tag color</Label>
        <Input type="color" id="color" />
        <ButtonGroup>
          <Button size="sm" variant="secondary">
            Cancel
          </Button>
          <Button type="submit" size="sm">
            Save
          </Button>
        </ButtonGroup>
      </Form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid var(--color-black);
  margin-top: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: var(--font-size-sm);
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  /* border-radius: 6px; */
  border: 1px solid var(--color-grey-light);

  &::placeholder {
    font-size: var(--font-size-sm);
  }

  // custom color picker
  &[type="color"] {
    padding: 0;
    width: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

