import { cn } from "@/lib/utils";
import {
  IconBrandJavascript,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandUbuntu,
  IconBrandDocker,
  IconCoffee,
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconShieldLock,
  IconNetwork,
  IconServer,
  IconCode,
  IconApi,
  IconTestPipe,
  IconUsers,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Linux",
      description:
        "System administration, shell scripting, and automation for virtualized network devices and cloud infrastructure.",
      icon: <IconBrandUbuntu />,
    },
    {
      title: "Python",
      description:
        "Scripting, automation, and tooling for monitoring, log analysis, and infrastructure management.",
      icon: <IconBrandPython />,
    },
    {
      title: "Java",
      description:
        "Enterprise backend development, integrations, and robust service architectures with focus on reliability.",
      icon: <IconCoffee />,
    },
    {
      title: "JavaScript",
      description:
        "Modern JS patterns, utilities, and performance-optimized frontend applications.",
      icon: <IconBrandJavascript />,
    },
    {
      title: "React.js",
      description:
        "Component-based UIs, state management, and interactive web applications with React ecosystem tools.",
      icon: <IconBrandReact />,
    },
    {
      title: "TypeScript",
      description:
        "Type-safe codebases, API layers, and design systems that keep large projects maintainable and scalable.",
      icon: <IconBrandTypescript />,
    },
    {
      title: "Docker",
      description:
        "Containerization, container orchestration, and Docker-based deployment pipelines for scalable and portable applications.",
      icon: <IconBrandDocker />,
    },
    {
      title: "Network Engineering",
      description:
        "Network security, VPN technologies, routing protocols, and Cisco-based enterprise network operations.",
      icon: <IconShieldLock />,
    },
    {
      title: "Splunk",
      description:
        "Central log collection, analysis, dashboard creation, and alerting for security and performance monitoring.",
      icon: <IconDeviceDesktopAnalytics />,
    },
    {
      title: "Monitoring CoMo",
      description:
        "Grafana and Prometheus dashboards, metrics, thresholds, and alerts for infrastructure observability.",
      icon: <IconGauge />,
    },
    {
      title: "REST-API",
      description:
        "API design, integration, and development for service communication and modern microservice architectures.",
      icon: <IconApi />,
    },
    {
      title: "Agile Methoden",
      description:
        "Scrum, Kanban, and iterative development practices for collaborative, fast-paced project delivery.",
      icon: <IconUsers />,
    },
  ];
  return (
    <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.03,
      }}
      className={cn(
        "flex flex-col lg:border-r py-6 px-4 sm:py-10 sm:px-10 relative group/feature border-slate-200 active:bg-blue-50/30 md:hover:bg-blue-50/30 transition-colors duration-200",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-active/feature:opacity-100 md:group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-active/feature:opacity-100 md:group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 text-slate-600">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 inset-y-0 h-6 group-active/feature:h-8 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-300 group-active/feature:bg-blue-500 md:group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-active/feature:translate-x-2 md:group-hover/feature:translate-x-2 transition duration-200 inline-block text-slate-900">
          {title}
        </span>
      </div>
      <p className="text-sm text-slate-600 max-w-xs relative z-10">
        {description}
      </p>
    </motion.div>
  );
};
