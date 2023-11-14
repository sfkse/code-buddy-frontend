import { Tags } from "./notes";

export interface CreateEvent {
  title: string;
  description: string;
  tags: Tags[];
  date: number;
  location: string;
  timeline: string;
  creator: string;
  status: number;
}

export interface EventParticipant {
  name: string;
  email: string;
  avatar: string;
  idusers: string;
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
  status: number;
  participants: EventParticipant[];
  locked: boolean;
}

export interface EventTimeline {
  id: number;
  description: string;
  time: string;
}

