"use client";

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconMail,
} from "@tabler/icons-react";

export type AboutSocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export type PresenceHighlight = {
  label: string;
  detail: string;
};

export const aboutSocialLinks: AboutSocialLink[] = [
  {
    href: "https://github.com/Samusn?tab=repositories",
    label: "GitHub",
    icon: <IconBrandGithub size={18} />,
  },
  {
    href: "https://www.linkedin.com/in/samuel-soun-a49049247/",
    label: "LinkedIn",
    icon: <IconBrandLinkedin size={18} />,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61580053778411&sk=about",
    label: "Facebook",
    icon: <IconBrandFacebook size={18} />,
  },
  {
    href: "mailto:sounsamuel07@gmail.com",
    label: "Email",
    icon: <IconMail size={18} />,
  },
];

export const presenceHighlights: PresenceHighlight[] = [
  {
    label: "Apprenticeship @ Swisscom",
    detail: "Informatiker EFZ · Applikationsentwicklung",
  },
  {
    label: "BBW & BMS-W Winterthur",
    detail: "Berufsschule · Berufsmaturitätschule",
  },
];

export const homeIcon = <IconHome size={16} />;
