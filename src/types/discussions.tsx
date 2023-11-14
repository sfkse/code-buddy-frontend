import { Tags } from "./notes";
import { User } from "./user";

export interface Discussion {
  iddiscussions: string;
  title: string;
  content: string;
  created: number;
  tags: Tags[];
  owner: string;
  upvote: number;
  downvote: number;
  comments: DiscussionComment[];
}

export interface DiscussionComment {
  iddiscussioncomments: string;
  comment: string;
  created: number;
  owner: string;
  upvote: number;
  downvote: number;
  username: string;
}

export interface CreateDiscussion {
  title: string;
  content: string;
  tags: Tags[];
  owner: User["idusers"];
}

export interface CreateDiscussionComment {
  comment: string;
  idUser: User["idusers"];
  iddiscussions: Discussion["iddiscussions"];
}

