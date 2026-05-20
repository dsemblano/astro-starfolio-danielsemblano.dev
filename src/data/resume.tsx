import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";

export const DATA = {
  name: "Daniel Semblano - Full Stack Developer",
  initials: "DS",
  url: "https://danielsemblano.dev",
  location: "Macappá, AP",
  locationLink: "https://www.google.com/maps/place/macappá+ap",
  description:
    "Full Stack Developer and SEO specialist.",
  summary:
    "Specialist with more than 15 years of service in developing high-performance, SEO-focused websites built for scale and reliability. Secure, semantic, and highly available solutions using Astro, React, or the Roots.io stack (Trellis, Bedrock, Sage) for WordPress and WooCommerce, consistently achieving 90+ scores on Google PageSpeed and GTmetrix.  Over the years, I’ve worked across the full spectrum of web development: frontend architecture, design systems, UI/UX, backend integrations, DevOps automation, and custom WordPress/WooCommerce ecosystems using modern stacks like Astro, React, Node.js, and Roots.io. My approach combines technical depth with attention to detail-semantic HTML, accessibility, performance budgets, security best practices, and maintainable architectures. I enjoy owning projects: understanding the problem, designing a scalable solution, implementing it with high standards, optimizing performance, and deploying with reliability.",
  avatarUrl: "/2.webp",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    skills: { order: 2, enabled: true, heading: "Skills" },
    projects: {
      order: 3, enabled: true,
      label: "My Projects",
      heading: "Main projects",
      text: "Some of my main projects.",
    },
    work: { order: 4, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    professionalSummary: { order: 5, enabled: true, heading: "Professional Profile", presentLabel: "Present" },
    education: { order: 6, enabled: false, heading: "Education" },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 8, enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 9, enabled: false,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.",
    },
  },
  professionalSummary: [
    {
      title: "Performance & Technical SEO",
      text: "Emphasis on semantic HTML, accessibility (A11y), fully responsive design, technical search engine optimization, Branding SEO, and Expert-level optimization for Core Web Vitals.",
    },
    {
      title: "Infrastructure:",
      text: "Solid experience in DevOps, security, and technical support, ensuring stable and scalable environments.",
    },
    {
      title: "The Modern WordPress Stack",
      text: "Advanced implementation using the Roots.io ecosystem (Trellis, Bedrock, Sage) for secure, scalable, and version-controlled WordPress and WooCommerce environments.",
    },
    {
      title: "Modern Web Tech",
      text: "Full-stack development with Laravel, PHP, and Astro, utilizing Tailwind CSS (v4) and Alpine.js for lightweight, lightning-fast interfaces.",
    },
    {
      title: "DevOps & Infrastructure",
      text: "Solid experience managing LEMP stacks (Nginx), automated deployments via Ansible/Vagrant, and edge performance via Cloudflare.",
    },
    {
      title: "Languages",
      text: " Fluent English and Native Portuguese.",
    },
  ],
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "Astro", icon: Astro },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    // { name: "Python", icon: Python },
    // { name: "Go", icon: Golang },
    // { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    // { name: "Kubernetes", icon: Kubernetes },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    // { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "hello@danielsemblano.dev",
    tel: "+5541997369298",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dsemblano",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/danielsemblano​",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/dsemblano",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@danielsemblano.dev",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Néctar da Amazônia​",
      href: "https://nectardaamazonia.com.br",
      badges: [""],
      location: "Macapá, Amapá - Brazil",
      title: "Full Stack Developer & SEO Specialist",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "February 2025",
      end: undefined,
      description:
        "Lead the complete redesign and development of the legacy site into a modern e-commerce platform (Roots.io stack, WordPress CMS and WooCommerce). Implementation of advanced SEO strategies to drive organic growth.",
    },
    {
      company: "PROS AP​",
      // href: "https://nectardaamazonia.com.br",
      badges: [""],
      location: "Macapá, Amapá - Brazil",
      title: "Full Stack Developer & SEO Specialist",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "April 2022",
      end: "October 2022",
      description:
        "Designed and developed professional websites using the Roots.io stack WordPress as CMS). Managed social media presence and Twitter/X account administration.",
    },
    {
      company: "Intelmax-IP (Remote)​​",
      href: "http://www.intelmax-ip.com",
      badges: [""],
      location: "remote job - Dubai",
      title: "Web Developer & SEO Specialist",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "November 2021",
      end: "February 2022",
      description:
        "SEO enhancements, refactor existing pages and creating new sections for a Dubai-based corporate site.",
    },
    {
      company: "Paradox Zero",
      href: "https://paradoxzero.com",
      badges: [""],
      location: "Recife - Pernambuco - Brazil",
      title: "Full Stack Developer",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "March 2016",
      end: "July 2016",
      description:
        "Developed WordPress solutions using LAMP stack, Underscores (_s), and JointsWP.",
    },
    {
      company: "Pitang IT",
      href: "https://www.pitang.com",
      badges: [""],
      location: "Recife - Pernambuco",
      title: "PHP /Web Developer",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "February 2014",
      end: "February 2016",
      description:
        "Developed enterprise projects using PHP, Drupal 7, and Liferay technology.",
    },
    {
      company: "Mirai Totalle",
      // href: "https://www.pitang.com",
      badges: [""],
      location: "Recife - Pernambuco - Brazil",
      title: "Full Stack Developer",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "November 2011",
      end: "November 2013",
      description:
        "End-to-end development alongside user support, networking, email server management, and hardware maintenance.",
    },
    {
      company: "Refinaria Promocional",
      // href: "https://www.pitang.com",
      badges: [""],
      location: "Curitiba - Paraná - Brazil",
      title: "Web Developer",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "May 2010",
      end: "March 2011",
      description:
        "Developed web applications using CodeIgniter, Zend Framework, Drupal (6/7), and WordPress websites.",
    },
    {
      company: "Grupo Ometz",
      // href: "https://www.pitang.com",
      badges: [""],
      location: "Curitiba - Paraná - Brazil",
      title: "Web Developer",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "July 2008",
      end: "February 2009",
      description:
        "Built web platforms using CodeIgniter, ExpressionEngine, and WordPress websites.",
    },
    {
      company: "Volvo Bank (Volvo do Brasil)",
      // href: "https://www.pitang.com",
      badges: [""],
      location: "Curitiba - Paraná - Brazil",
      title: "Support Analyst ",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "April 2007",
      end: "November 2007",
      description:
        "Provided technical support and system analysis for the financial division.",
    },
    {
      company: "Volvo IT (Volvo do Brasil)",
      // href: "https://www.pitang.com",
      badges: [""],
      location: "Curitiba - Paraná - Brazil",
      title: "Support Analyst ",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "February 2006",
      end: "November 2006",
      description:
        "Support Analyst for migrating all Windows OS.",
    },
  ],
  education: [
    {
      school: "Founder Fellowship SF",
      href: "https://foundersfellowship.io",
      degree: "Cohort 4 - Founder in Residence",
      logoUrl: "https://avatar.vercel.sh/founder-fellowship?size=40",
      start: "2023",
      end: "2023",
    },
    {
      school: "University of British Columbia",
      href: "https://ubc.ca",
      degree: "Bachelor of Science, Computer Science",
      logoUrl: "https://www.google.com/s2/favicons?domain=ubc.ca&sz=128",
      start: "2018",
      end: "2023",
    },
    {
      school: "Simon Fraser University",
      href: "https://sfu.ca",
      degree: "Bachelor of Business Administration",
      logoUrl: "https://www.google.com/s2/favicons?domain=sfu.ca&sz=128",
      start: "2018",
      end: "2023",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "https://www.google.com/s2/favicons?domain=ibo.org&sz=128",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Brava Terra Vinhos",
      href: "https://bravaterravinhos.com.br/",
      dates: "April 2026 - Present",
      active: true,
      description:
        "Specialized wine e-commerce featuring a great selection of brazilian wines.",
      technologies: [
        "roots.io",
        "WordPress",
        "WooCommerce",
        "TailwindCSS",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://bravaterravinhos.com.br",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bravaterravinhos.webp",
      video: "",
    },
    {
      title: "Néctar da Amazônia",
      href: "https://nectardaamazonia.com.br",
      dates: "February 2025 - Present",
      active: true,
      description:
        "Brazilian startup working to foster sustainable development in the Amazon through honey stingless beekeeping production (meliponiculture) and bioeconomy focused initiatives. Website built with roots.io stack (WordPress) and WooCommerce.",
      technologies: [
        "roots.io",
        "WordPress",
        "WooCommerce",
        "TailwindCSS",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://nectardaamazonia.com.br",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dsemblano/nectardaamazonia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nectardaamazonia.webp",
      video: "",
    },
    {
      title: "Tijolo CWB Restaurante",
      href: "https://tijolocwb.com.br",
      dates: "December 2020 - Present",
      active: true,
      description:
        "An slow food contemporary restaurant, focused on delivering high quality dishes made with locally sourced ingredients. Website built with roots.io stack (WordPress).",
      technologies: [
        "roots.io",
        "WordPress",
        "TailwindCSS",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://tijolocwb.com.br",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dsemblano/tijolocwb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tijolocwb.webp",
      video: "",
    },
    {
      title: "SFCO 179 Multispace",
      href: "https://sfco179.com.br",
      dates: "February 2021 - Present",
      active: true,
      description:
        "Multispace basead in Brazil that offers a restaurant (Tijolo CWB Restaurant), a coffee shop, a event space and a chocolate factory in the Historic Center of Curitiba. Website built with roots.io stack (WordPress).",
      technologies: [
        "roots.io",
        "WordPress",
        "TailwindCSS",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://sfco179.com.br",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sfco179.webp",
      video: "",
    },
        {
      title: "Incrível História",
      href: "https://incrivelhistoria.com.br",
      dates: "January 2017 - Present",
      active: true,
      description:
        "Website built for historical content and facts in a serious, educational, and impartial manner.  A long-standing history content platform (active since 2017). Brazilian and World history. Built with roots.io stack (WordPress).",
      technologies: [
        "roots.io",
        "WordPress",
        "TailwindCSS",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://incrivelhistoria.com.br",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ih.webp",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "PNW Hacks 2022",
      dates: "October 14th - 16th, 2022",
      location: "Seattle, Washington",
      description: "Built a real-time collaborative code review tool using WebSockets and Monaco Editor. Won best developer tool.",
      image: "https://avatar.vercel.sh/pnw-hacks?size=40",
      win: "Best Developer Tool",
      links: [],
    },
    {
      title: "nwHacks 2022",
      dates: "January 15th - 16th, 2022",
      location: "Vancouver, BC",
      description: "Created an accessibility-first browser extension that rewrites complex legal documents into plain English using GPT-3.",
      image: "https://avatar.vercel.sh/nwhacks-2022?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2021",
      dates: "September 17th - 19th, 2021",
      location: "Waterloo, Ontario (Remote)",
      description: "Built a distributed key-value store in Go with a Raft consensus implementation from scratch. Finalist in the systems track.",
      image: "https://avatar.vercel.sh/hackthenorth-2021?size=40",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/raftdb",
        },
      ],
    },
    {
      title: "DubHacks 2021",
      dates: "October 9th - 10th, 2021",
      location: "Seattle, Washington",
      description: "Developed a carbon footprint tracker that integrates with Google Maps to suggest lower-emission commute alternatives.",
      image: "https://avatar.vercel.sh/dubhacks-2021?size=40",
      win: "Best Sustainability Hack",
      links: [],
    },
    {
      title: "StormHacks 2021",
      dates: "April 24th - 25th, 2021",
      location: "Burnaby, BC (Remote)",
      description: "Built a multiplayer browser game where players collaboratively debug a shared codebase before a timer runs out.",
      image: "https://avatar.vercel.sh/stormhacks-2021?size=40",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/bugout",
        },
      ],
    },
    {
      title: "HackCamp 2020",
      dates: "November 14th - 15th, 2020",
      location: "Vancouver, BC (Remote)",
      description: "Created a CLI tool that automatically generates unit test scaffolding from TypeScript function signatures using static analysis.",
      image: "https://avatar.vercel.sh/hackcamp-2020?size=40",
      win: "1st Place Overall",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/testgen",
        },
      ],
    },
    {
      title: "cmd-f 2020",
      dates: "March 7th - 8th, 2020",
      location: "Vancouver, BC",
      description: "Built a mobile-first job board specifically for junior developers, aggregating listings from GitHub Jobs, HN Who's Hiring, and LinkedIn.",
      image: "https://avatar.vercel.sh/cmd-f-2020?size=40",
      links: [],
    },
    {
      title: "nwHacks 2020",
      dates: "January 11th - 12th, 2020",
      location: "Vancouver, BC",
      description: "Developed a peer-to-peer study session platform with live video, shared whiteboards, and Pomodoro timers.",
      image: "https://avatar.vercel.sh/nwhacks-2020?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2019",
      dates: "September 13th - 15th, 2019",
      location: "Waterloo, Ontario",
      description: "Built an API rate-limit visualizer that tracks usage across multiple providers and surfaces anomalies in real time.",
      image: "https://avatar.vercel.sh/hackthenorth-2019?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/ratelens",
        },
      ],
    },
    {
      title: "DeltaHacks V",
      dates: "January 18th - 19th, 2019",
      location: "Hamilton, Ontario",
      description: "Created a VS Code extension that suggests variable names based on type signatures and surrounding code context using a local ML model.",
      image: "https://avatar.vercel.sh/deltahacks-v?size=40",
      links: [],
    },
    {
      title: "StormHacks 2019",
      dates: "March 2nd - 3rd, 2019",
      location: "Burnaby, BC",
      description: "Built a network latency heatmap tool that visualises CDN performance across regions using real user data injected via a lightweight JS snippet.",
      image: "https://avatar.vercel.sh/stormhacks-2019?size=40",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],
} as const;
