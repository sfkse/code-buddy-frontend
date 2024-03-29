import styled from "styled-components";

interface NoteEditProps {
  noteToBeEdited: {
    title: string;
    description: string;
  };
}
function NoteEdit({ noteToBeEdited }: NoteEditProps) {
  const handleChange = () => {
    console.log("object");
  };
  const handleSubmit = () => {
    console.log("object");
  };

  return (
    <Wrapper>
      <Title>Edit Note</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          value={noteToBeEdited.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <Textarea
          name="description"
          value={noteToBeEdited.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <Button type="submit">Save</Button>
      </Form>
    </Wrapper>
  );
}

export default NoteEdit;

const Wrapper = styled.div`
  padding: 2rem;
  background-color: var(--color-white);
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: var(--font-size-lg);
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid var(--color-grey-light);
`;

const Textarea = styled.textarea`
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid var(--color-grey-light);
`;

const Button = styled.button`
  padding: 1rem;
  border-radius: 6px;
  border: none;
  background-color: var(--color-orange-dark);
  color: var(--color-white);
  font-size: var(--font-size-sm);
  cursor: pointer;

  &:hover {
    background-color: var(--color-orange-light);
  }
`;

