import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jonas Beck — Junior Developer",
  author: "Jonas Beck",
  description:
    "Junior developer based in Denmark. Working to improve developer experience through IDP Backstage and building internal tooling.",
  lang: "en",
  siteLogo: "/jonas-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/jonas-beck-591a88291" },
    { text: "Github", href: "https://github.com/Jonas-Beck" },
    { text: "OpenProfile", href: "https://openprofile.dev/jonasbeck" },
  ],
  socialImage: "/zen-og-image.jpeg",
  canonicalURL: "https://jonasbeck.dk",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jonas Beck",
    specialty: "Junior Developer",
    summary:
      "Junior developer based in Denmark. Working to improve developer experience through IDP Backstage and building internal tooling.",
    email: "contact@jonasbeck.dk",
  },
  experience: [
    {
      company: "VELUX",
      position: "Junior Developer in CCoE",
      startDate: "Jan 2025",
      endDate: "Current",
      summary: [
        "I maintain and improve our internal CLI Bura used by developers to easily create HelmReleases for their services and release to our Kubernetes clusters using GitOps repositories.",
        "I create and develop internal golden path Helm chart called helms-deep that contain all our best practices and made it easier for our developers to release services to our Kubernetes clusters.",
      ],
    },
    {
      company: "VELUX",
      position: "Intern in CCoE",
      startDate: "Apr 2024",
      endDate: "Dev 2024",
      summary: [
        "I maintained and improved our internal developer portal (Backstage) by creating custom internal plugins that improved platform visibility and integration.",
        "I developed the policy-reporter Backstage plugin to display policy reports from tools like Kyverno, Trivy, and Falco for Backstage entities. This plugin was later open-sourced and donated to the official Kyverno CNCF project.",
        "I created a Kafka module for Backstage's events plugin, enabling Backstage to subscribe to Kafka topics and expose them through the internal event service. The module was also open-sourced and contributed back to the official Backstage repository.",
      ],
    },
  ],
  projects: [
    {
      name: "Policy Reporter",
      summary:
        "Backstage plugin for displaying policy-reports from tools like Kyverno, Trivy and Falco",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/policy-reporter.png",
    },
    // TODO: kafka module
  ],
  about: {
    description: `
      Hi, I'm Jonas Beck, a passionate Junior Developer with a focus on enhancing developer experience and building internal tooling. With experience in platform engineering and Kubernetes,\n

      During my journey, I've contributed to improving development workflows through internal developer portals like Backstage, creating custom plugins, and building tools that streamline how teams deploy and manage their services. I am also a maintainer for the official Kyverno CNCF project, following my contribution of the policy-reporter Backstage plugin that enables teams to view policy reports directly in Backstage, which I continue to maintain and improve.
    `,
    image: "/jonas-big.jpg",
  },
};

// #5755ff
