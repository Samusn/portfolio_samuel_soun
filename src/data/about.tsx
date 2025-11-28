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

export type TimelineItem = {
  period: string;
  project: string;
  team: string;
  description: string;
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

export const timelineItems: TimelineItem[] = [
  {
    period: "Aug 2025 – Today",
    project: "Fullstack Engineer",
    team: "Swisscom · KeyCom",
    description:
      "KeyCom is an innovative application that helps enterprises respond quickly, reliably, and efficiently in emergencies. At its core is mobilization management, which uses modern APIs such as eAlarm to immediately mobilize the right people. The logging of incidents also ensures structured recording and analysis, so that companies can maintain an overview at all times. Together with a motivated team, I developed new features, integrated modern interfaces, and worked to make KeyCom an indispensable solution for business continuity.",
  },
  {
    period: "Feb 2025 – Sep 2025",
    project: "Network DevOps Engineer",
    team: "Swisscom · Team Atlas BNS",
    description:
      "Insights into network technology and cybersecurity. Operation of virtualized, cloud-based network devices for customers. Operation of complex corporate networks. Development of new functions and implementation of tests and proof of concepts. Identification and resolution of problems and anomalies in the network.",
  },
  {
    period: "Aug 2024 – Jan 2025",
    project: "Monitoring & Log Solution",
    team: "Swisscom · Team SEO HCS",
    description:
      "Creating dashboards in CoMo (Grafana, Prometheus) and Splunk. Implementing new metrics, logs, thresholds, and alerts. Central collection and analysis of log data from various sources. Early detection of potential security issues and inefficient processes. Goal: Efficient monitoring and analysis for increased security and performance of the Firewall Policy Orchestration Suite.",
  },
  {
    period: "Aug 2023 – Aug 2024",
    project: "Tool-Landschaft & Orch-Cockpit",
    team: "Swisscom · Team Kratos BNS",
    description:
      "Further development of the CI/CD and build tool landscape (Jenkins, Kubernetes, Helm, Ansible, Docker). Further development of the Orch-Cockpit web application, which enables the operation of the orchestration IT (React, Typescript, NodeJS, Ruby). Further development/optimization of the Amigo runtime environments (iAPC aka Cloudfoundry).",
  },
];

export const presenceHighlights: PresenceHighlight[] = [
  {
    label: "Apprenticeship @ Swisscom",
    detail: "Informatiker EFZ · Applikationsentwicklung",
  },
  {
    label: "FDP Suhr",
    detail: "Vorstandsmitglied · Protokollführer",
  },
  {
    label: "Jungfreisinnige Schweiz",
    detail: "Mitglied",
  },
];

export const homeIcon = <IconHome size={16} />;

