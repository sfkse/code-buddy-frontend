import { FaRegStickyNote, FaRocketchat } from "react-icons/fa";
import { GiCalendar, GiDiscussion } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiGotomeeting } from "react-icons/si";
import { FaCompassDrafting, FaRankingStar } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  MdForum,
  MdOutlineEventAvailable,
  MdOutlineQuestionAnswer,
  MdOutlineSecurity,
  MdPublishedWithChanges,
  MdSupervisorAccount,
} from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";

type MenuLinkProps = {
  label: string;
  icon: JSX.Element;
  link: string;
  soon?: boolean;
};

type PageMenuLinks = {
  label: string;
  icon: JSX.Element;
  to: string;
};

export const menuLinks: MenuLinkProps[] = [
  {
    label: "Home",
    icon: <LuLayoutDashboard />,
    link: "/",
  },
  {
    label: "Notes",
    icon: <FaRegStickyNote />,
    link: "/notes",
  },
  {
    label: "Live Chat",
    icon: <FaRocketchat />,
    link: "#",
    soon: true,
  },
  {
    label: "Events",
    icon: <SiGotomeeting />,
    link: "/events",
  },
  {
    label: "Discussions",
    icon: <GiDiscussion />,
    link: "/discussions/questions",
  },
  {
    label: "Calender",
    icon: <GiCalendar />,
    link: "/calender",
  },
];

export const discussionsMenuLinks: PageMenuLinks[] = [
  {
    label: "Questions",
    icon: <MdForum />,
    to: "/discussions/questions",
  },
  {
    label: "Ranking",
    icon: <FaRankingStar />,
    to: "/discussions/ranking",
  },
  {
    label: "Your Questions",
    icon: <AiOutlineQuestionCircle />,
    to: "/discussions/yourquestions",
  },
  {
    label: "Your Answers",
    icon: <MdOutlineQuestionAnswer />,
    to: "/discussions/youranswers",
  },
];

export const settingsMenuLinks: PageMenuLinks[] = [
  {
    label: "Account",
    icon: <MdSupervisorAccount />,
    to: "/settings/account",
  },
  {
    label: "Permissions",
    icon: <MdOutlineSecurity />,
    to: "/settings/permissions",
  },
];

export const eventCreateMenuLinks: PageMenuLinks[] = [
  {
    label: "New Event",
    icon: <BsCalendar2Event />,
    to: "/events/create",
  },
  {
    label: "My Events",
    icon: <MdPublishedWithChanges />,
    to: "/events/published",
  },
  {
    label: "Joined Events",
    icon: <MdOutlineEventAvailable />,
    to: "/events/joined",
  },
  {
    label: "Drafts",
    icon: <FaCompassDrafting />,
    to: "/events/joined",
  },
];

