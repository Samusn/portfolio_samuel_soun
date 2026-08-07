"use client";

export type TimelineItem = {
  period: string;
  project: string;
  team: string;
  description: string;
};

export const timelineItems: TimelineItem[] = [
  {
    period: "June 2026 – Today",
    project: "Python Backend Development",
    team: "Swisscom · Team SEO HCS",
    description:
      "In this project, I'm gaining hands-on insight into the HCS SEO software development environment, which is based on Python and Flask. I'm working closely with experienced software developers and taking on my own tasks in line with the team's roadmap. I will then implement smaller projects and subtasks according to the roadmap and support the team in developing modules and tools in the area of network security orchestration (TUFIN). I also have the opportunity to complete my practical work (IPA) directly within the team, which allows me to apply and deepen my knowledge in a concrete, practice-oriented project.",
  },
  {
    period: "Aug 2025 – June 2026",
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
