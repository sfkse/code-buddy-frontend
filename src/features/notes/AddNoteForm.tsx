import styled from "styled-components";
import Switch from "react-switch";
import Button from "../../ui/Button";
import { useRef, useState } from "react";
import DraftEditor from "../../ui/DraftEditor";
import { ContentState, Editor, EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

//TODO: Fix states and editor handling
function AddNoteForm() {
  const [checked, setChecked] = useState(false);
  const [formState, setFormState] = useState({
    editorState: EditorState.createWithContent(ContentState.createFromText("")),
    currentState: {
      title: "",
      description: "",
      tags: "",
      sharedWith: "",
      reminder: "",
    },
  });
  const editorRef = useRef<Editor>(null);

  const handleOnAllowMessages = () => {
    setChecked(!checked);
  };

  const handleOnChangeEditor = (editorState: EditorState) => {
    const html = stateToHTML(editorState.getCurrentContent());

    setFormState((prev) => ({
      ...prev,
      editorState,
      currentState: { ...prev.currentState, description: html },
    }));
  };

  return (
    <FormWrapper>
      <Form>
        <InputGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            required
            autoFocus
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="tags">Tags</Label>
          <Input
            id="tags"
            type="text"
            name="tags"
            placeholder="Tags"
            required
          />
        </InputGroup>
        <InputGroup isswitchtype="true">
          <Switch
            checked={checked}
            width={50}
            height={22}
            onHandleColor="#e0e2db"
            onChange={handleOnAllowMessages}
          />
          <Label htmlFor="sharedWith">Share with others</Label>
        </InputGroup>
        <Input type="text" name="sharedWith" placeholder="Share with" />
        <InputGroup isswitchtype="true">
          <Switch
            checked={checked}
            width={50}
            height={22}
            onHandleColor="#e0e2db"
            onChange={handleOnAllowMessages}
          />
          <Label htmlFor="reminder">Set reminder</Label>
        </InputGroup>
        <Input type="datetime-local" name="reminder" />
        <DraftEditor
          size="sm"
          editorRef={editorRef}
          editorState={formState.editorState}
          handleOnChangeEditor={handleOnChangeEditor}
        />
        <ButtonGroup>
          <Button
            type="button"
            size="sm"
            variant="secondary"
            onClick={() => console.log("canceled")}
          >
            Cancel
          </Button>
          <Button type="submit" size="sm">
            Save
          </Button>
        </ButtonGroup>
      </Form>
    </FormWrapper>
  );
}

export default AddNoteForm;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 4px;
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

const InputGroup = styled.div<{ isswitchtype?: string }>`
  display: flex;
  flex-direction: ${({ isswitchtype }) => (isswitchtype ? "row" : "column")};
  align-items: ${({ isswitchtype }) => (isswitchtype ? "center" : "")};
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  /* border-radius: 6px; */
  border: 1px solid var(--color-grey-light);

  &::placeholder {
    font-size: var(--font-size-sm);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

