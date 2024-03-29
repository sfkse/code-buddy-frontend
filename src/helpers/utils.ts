export const menuLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Notes",
    link: "/notes",
  },
  {
    label: "Fellows",
    link: "/fellows",
  },
  {
    label: "Live Chat",
    link: "live-chat",
    soon: true,
  },
  {
    label: "Events",
    link: "/events",
  },
  {
    label: "Discussions",
    link: "/discussions",
  },
  {
    label: "Calendar",
    link: "/calendar",
  },
  {
    label: "Blog",
    link: "/posts",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export const getFilterNameFromQuery = (search: string) => {
  const searchParams = new URLSearchParams(search);
  return searchParams.get("filter");
};

