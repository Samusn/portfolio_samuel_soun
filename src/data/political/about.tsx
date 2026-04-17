"use client";

import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconHome,
  IconMail,
} from "@tabler/icons-react";
import type { AboutSocialLink, PresenceHighlight, TimelineItem } from "@/data/about";

export const politicalSocialLinks: AboutSocialLink[] = [
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
    label: "E-Mail",
    icon: <IconMail size={18} />,
  },
];

export const politicalPresenceHighlights: PresenceHighlight[] = [
  {
    label: "FDP Suhr",
    detail: "Vorstandsmitglied · Aktuar",
  },
  {
    label: "Jungfreisinnige Schweiz",
    detail: "Mitglied",
  },
  {
    label: "Wahlbüro Suhr",
    detail: "Gewählt mit 913 Stimmen · Sep. 2025",
  },
];

export const politicalTimelineItems: TimelineItem[] = [
  {
    period: "Sep. 2025 – Heute",
    project: "Stimmenzähler im Wahlbüro",
    team: "FDP · Gemeinde Suhr",
    description:
      "Am 30. September 2025 wurde ich in das Wahlbüro von Suhr gewählt. Als Stimmenzähler bin ich für die korrekte Auszählung der Stimmen verantwortlich. Dies ist mein erster offizieller Schritt in die Lokalpolitik.",
  },
  {
    period: "2024 – Heute",
    project: "Vorstandsmitglied · Aktuar",
    team: "FDP Suhr",
    description:
      "Aktives Mitglied des Vorstands der FDP Suhr. Als Aktuar halte ich die Vorstandssitzungen fest und bringe mich in die strategische und organisatorische Arbeit der Ortssektion ein.",
  },
  {
    period: "2024 – Heute",
    project: "Mitglied",
    team: "Jungfreisinnige Schweiz",
    description:
      "Mitglied der Jungfreisinnigen Schweiz, der Jugendorganisation der FDP.Die Liberalen. Ich engagiere mich für liberale Werte, Veranstaltungen und Initiativen auf regionaler Ebene, insbesondere durch die Sektion Jungfreisinnige Aarau-Lenzburg-Kulm.",
  },
];

export const politicalHomeIcon = <IconHome size={16} />;
