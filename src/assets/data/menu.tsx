import { FaRegStickyNote, FaRocketchat } from "react-icons/fa";
import { GiCalendar, GiDiscussion } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiGotomeeting } from "react-icons/si";
import { FaRankingStar } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  MdForum,
  MdOutlineQuestionAnswer,
  MdOutlineSecurity,
  MdSupervisorAccount,
} from "react-icons/md";

type MenuLinkProps = {
  label: string;
  icon: JSX.Element;
  link: string;
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
    label: "Chat",
    icon: <FaRocketchat />,
    link: "/chat",
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

