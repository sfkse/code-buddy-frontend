import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RiDraftFill } from "react-icons/ri";
import { TbCubeSend } from "react-icons/tb";
import { ContentState, Editor, EditorState, convertToRaw } from "draft-js";
import { useLocation } from "react-router-dom";
import { stateToHTML } from "draft-js-export-html";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers";
import "draft-js/dist/Draft.css";

import Button from "../../components/Button";
import DraftEditor from "../../components/DraftEditor";
import EditorStyleOptions from "../../components/EditorStyleOptions";
import Loader from "../Loader";
import ToastMessage from "../ToastMessage";
import SelectMultipleOptions from "../notes/SelectMultipleOptions";

import useSetOnStyle from "../../hooks/editor/useSetOnStyle";
import useSaveEvent from "../../hooks/events/useSaveEvent";
import { useFetchAuthUser } from "../../hooks/user/useFetchAuthUser";
import { EVENT_STATUS } from "../../utils/eventsUtils";
import { Tags } from "../../types/notes";
import { Event } from "../../types/events";

const DraftEventEdit = () => {
  const [formState, setFormState] = useState({
    dataChanged: false,
    editorState: EditorState.createWithContent(ContentState.createFromText("")),
    currentState: {
      description: "",
      title: "",
      tags: [] as Tags[],
      date: 0,
      location: "",
      status: EVENT_STATUS.DRAFT,
      timeline: [{ id: 1, time: "", description: "" }],
    },
  });
  const editorRef = useRef<Editor>(null);
  const location = useLocation();
  const event = location.state as Event;

  const { mutate, error, isPending } = useSaveEvent();
  const { authUser } = useFetchAuthUser();

  const setEditorState = (editorState: EditorState) => {
    setFormState((prev) => ({
      ...prev,
      editorState: editorState,
    }));
  };
  const { handleOnStyle } = useSetOnStyle(
    setEditorState,
    formState.editorState
  );

  useEffect(() => {
    setInitialData();
  }, []);

  const setInitialData = () => {
    setFormState((prev) => ({
      ...prev,
      currentState: {
        ...prev.currentState,
        description: event.description,
        title: event.title,
        tags: event.tags,
        date: event.date,
        location: event.location,
        status: event.status,
        timeline: JSON.parse(JSON.parse(event.timeline)),
      },
    }));
  };

  const handleOnChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    dateType: boolean = false
  ) => {
    if (dateType) {
      setFormState((prev) => ({
        ...prev,

        currentState: {
          ...prev.currentState,
          date: e.$d.toISOString().slice(0, 19).replace("T", " "),
        },
      }));
    } else {
      setFormState((prev) => ({
        ...prev,

        currentState: { ...prev.currentState, [e.target.name]: e.target.value },
      }));
    }
  };

  const handleOnChangeEditor = (editorState: EditorState) => {
    const html = stateToHTML(editorState.getCurrentContent());

    setFormState((prev) => ({
      ...prev,
      editorState,
      currentState: { ...prev.currentState, description: html },
    }));
  };

  const handleOnChangeTags = (tags: any) => {
    setFormState((prev) => ({
      ...prev,
      currentState: { ...prev.currentState, tags: tags },
    }));
  };

  const handleOnChangeTimeLine = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    index: number
  ) => {
    let value: string;
    if (name === "time") {
      const options = { timeZone: "Europe/Berlin", timeStyle: "medium" };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      const cetTime = formatter.format(e.$d).split(":");
      const formattedTime =
        cetTime.slice(0, 2).join(":") + " " + cetTime[2].split(" ")[1];
      value = formattedTime;
    } else {
      value = e.target.value;
    }
    setFormState((prev) => ({
      ...prev,
      currentState: {
        ...prev.currentState,
        timeline: prev.currentState.timeline.map((slot) =>
          slot.id === index ? { ...slot, [name]: value } : slot
        ),
      },
    }));
  };

  const handleOnSubmitEvent = (type: number) => {
    console.log(formState.currentState);
    console.log(type);
    mutate({
      title: formState.currentState.title,
      description: JSON.stringify(
        convertToRaw(formState.editorState.getCurrentContent())
      ),
      tags: formState.currentState.tags,
      date: Math.floor(new Date(formState.currentState.date).getTime() / 1000),
      location: formState.currentState.location,
      timeline: JSON.stringify(formState.currentState.timeline),
      creator: authUser.idusers,
      status: type,
    });
  };
  console.log(formState.currentState);

  const timeSlot = formState.currentState.timeline.map((slot, index) => (
    <EventNewTimeline key={index}>
      <Provider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Starting time(CET)"
          onChange={(e) => handleOnChangeTimeLine(e as any, "time", slot.id)}
        />
      </Provider>
      <EventNewTimeSlotText
        placeholder="Description"
        onChange={(e) => handleOnChangeTimeLine(e, "description", slot.id)}
      />
    </EventNewTimeline>
  ));

  return (
    <Loader isLoading={isPending}>
      {error ? (
        <ToastMessage text={error instanceof Error ? error.message : ""} />
      ) : null}
      <EventNewContentWrapper>
        <EventNewFormWrapper>
          <EvenTagsWrapper>
            <SelectEventTag
              placeholder="Tags for the event..."
              handleOnChangeSelect={handleOnChangeTags}
              options={[]}
              value={formState.currentState.tags}
            />
          </EvenTagsWrapper>
          <EventNewTitle
            placeholder="Enter a title..."
            value={formState.currentState.title}
            name="title"
            onChange={(e) => handleOnChangeInput(e)}
          />
          <EventNewLocation
            placeholder="Where do you want to host the event?"
            name="location"
            value={formState.currentState.location}
            onChange={(e) => handleOnChangeInput(e)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Event Date(CET)"
              onChange={(e) => handleOnChangeInput(e as any, true)}
            />
          </LocalizationProvider>
          <EditorStyleOptions handleOnStyle={handleOnStyle} />
          <DraftEditor
            size="sm"
            editorRef={editorRef}
            editorState={formState.editorState}
            handleOnChangeEditor={handleOnChangeEditor}
          />

          <EventNewTimelineWrapper>
            <EventNewTimelineHeader> Timeline </EventNewTimelineHeader>
            <EventNewTimelineText>
              Enter a description or agenda for this time slot. Include details
              about what will happen during this part of the event, such as
              topics, speakers, activities, or any relevant information.
              Providing a clear and informative description helps attendees
              understand what to expect and make the most of their time.
            </EventNewTimelineText>
            {timeSlot}
            <EventNewAddTimeSlotButton
              variant="primary"
              onClick={() =>
                setFormState((prev) => ({
                  ...prev,
                  currentState: {
                    ...prev.currentState,
                    timeline: [
                      ...prev.currentState.timeline,
                      {
                        id: prev.currentState.timeline.length + 1,
                        time: "",
                        description: "",
                      },
                    ],
                  },
                }))
              }
              title="+ Add time slot"
            />
          </EventNewTimelineWrapper>
          <ButtonWrapper>
            <Button
              onClick={() => handleOnSubmitEvent(EVENT_STATUS.DRAFT)}
              type="submit"
              title="Save as draft"
              icon={<RiDraftFill />}
            />
            <Button
              onClick={() => handleOnSubmitEvent(EVENT_STATUS.REVIEW)}
              type="submit"
              title="Publish"
              variant="primary"
              icon={<TbCubeSend />}
            />
          </ButtonWrapper>
        </EventNewFormWrapper>
      </EventNewContentWrapper>
    </Loader>
  );
};

export default DraftEventEdit;

const EventNewContentWrapper = styled.div`
  width: 100%;
  padding: 2rem 2rem 2rem 0;
`;

const EventNewFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;
const EvenTagsWrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  z-index: 10;
`;

const SelectEventTag = styled(SelectMultipleOptions)`
  position: absolute;
  z-index: 10;
  margin-bottom: 1rem;
`;

const EventNewTitle = styled.input`
  width: 100%;
  font-weight: 700;
  margin-bottom: 1rem;
  background-color: transparent;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryExtraLight};
    font-weight: normal;
    font-size: 0.9rem;
  }
`;

const EventNewLocation = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryExtraLight};
    font-weight: normal;
    font-size: 0.9rem;
  }
`;

const EventNewTimelineWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventNewTimelineHeader = styled.div`
  font-size: ${({ theme }) => theme.font.body.base};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem;
`;

const EventNewTimelineText = styled.div`
  font-size: ${({ theme }) => theme.font.body.sm};
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  letter-spacing: 0.5px;
  margin: 2rem 0;
`;

const EventNewTimeline = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Provider = styled(LocalizationProvider)`
  flex: 1;
  margin-bottom: 1rem;
`;

const EventNewTimeSlotText = styled.input`
  flex: 2;
  margin-bottom: 1rem;
  background-color: transparent;
  padding: 1rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryExtraLight};
    font-weight: normal;
    font-size: 0.9rem;
  }
`;

const EventNewAddTimeSlotButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 4rem;
`;

