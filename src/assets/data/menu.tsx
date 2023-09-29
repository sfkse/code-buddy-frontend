import { FaRegStickyNote, FaRocketchat } from "react-icons/fa";
import { GiCalendar, GiDiscussion } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiGotomeeting } from "react-icons/si";

type MenuLinkProps = {
  label: string;
  icon: JSX.Element;
  link: string;
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
    link: "/notes/my-notes",
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
    link: "/discussions",
  },
  {
    label: "Calender",
    icon: <GiCalendar />,
    link: "/calender",
  },
];

