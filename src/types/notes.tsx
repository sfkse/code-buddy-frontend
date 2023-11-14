export interface Note {
  idnotes: string;
  active: boolean;
  title: string;
  content: string;
  type: string;
  created: number;
  updated: number;
  tags: Tags[];
  owner: string;
}

export interface Tags {
  label: string;
  value: string;
}

export interface PostNoteData {
  idnotes: string;
  title: string;
  content: string;
  type: string;
  tags: Tags[];
  owner: string;
  active: boolean;
}

export interface CreateNoteData {
  title: string;
  content: string;
  type: string;
  tags: Tags[];
  owner: string;
}

