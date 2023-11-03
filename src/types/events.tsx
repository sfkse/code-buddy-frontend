import { Tags } from "./notes";

export interface CreateEvent {
  title: string;
  description: string;
  tags: Tags[];
  date: number;
  location: string;
  timeline: string;
  creator: string;
  type: string;
}

export interface EventParticipant {
  name: string;
  email: string;
  avatar: string;
}

export interface Event {
  idevents: string;
  title: string;
  description: string;
  image: string;
  tags: Tags[];
  date: number;
  location: string;
  timeline: string;
  creator: string;
  type: string;
  participants: EventParticipant[];
  locked: boolean;
}

export interface EventTimeline {
  id: number;
  description: string;
  time: string;
}

