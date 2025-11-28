import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const socialLinks: SocialLink[] = [
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

