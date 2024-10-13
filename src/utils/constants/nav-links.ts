import { HelpCircleIcon, NewspaperIcon } from "lucide-react";

export const NAV_LINKS = [
  {
    title: "Resources",
    href: "/resources",
    menu: [
      {
        title: "Blog",
        tagline: "Read articles on the latest trends in tech.",
        href: "/resources/blog",
        icon: NewspaperIcon,
      },
      {
        title: "Help",
        tagline: "Get answers to your questions.",
        href: "/resources/help",
        icon: HelpCircleIcon,
      },
    ],
  },
  {
    title: "Contact Us",
    href: "/contactus",
  },
];
