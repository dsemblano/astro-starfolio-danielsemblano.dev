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
  name: "Daniel Semblano - Desenvolvedor Full Stack",
  initials: "DS",
  url: "https://danielsemblano.dev",
  location: "Macappá, AP",
  locationLink: "https://www.google.com/maps/place/macappá+ap",
  description:
    "Desenvolvedor Full Stack e Especialista SEO.",
  summary:
    "Especialista com mais de 15 anos de experiência no desenvolvimento de websites de alto desempenho, focados em SEO e construídos para escalabilidade e confiabilidade. Soluções seguras, semânticas e de alta disponibilidade, utilizando Astro, React ou a stack Roots.io (Trellis, Bedrock, Sage) para WordPress e WooCommerce, alcançando consistentemente pontuações acima de 90 no Google PageSpeed ​​e GTmetrix. Ao longo dos anos, trabalhei em todo o espectro do desenvolvimento web: arquitetura frontend, sistemas de design, UI/UX, integrações backend, automação DevOps e ecossistemas personalizados para WordPress/WooCommerce, utilizando stacks modernas como Astro, React, Node.js e Roots.io. Minha abordagem combina conhecimento técnico aprofundado com atenção aos detalhes — HTML semântico, acessibilidade, orçamentos de desempenho, melhores práticas de segurança e arquiteturas de fácil manutenção. Gosto de assumir a responsabilidade por projetos: entender o problema, projetar uma solução escalável, implementá-la com altos padrões, otimizar o desempenho e implantá-la com confiabilidade.",
  avatarUrl: "/2.webp",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "Sobre" },
    skills: { order: 2, enabled: true, heading: "Habilidades" },
    projects: {
      order: 3, enabled: true,
      label: "Meus Projetos",
      heading: "Projetos Principais",
      text: "Alguns dos meus projetos principais.",
    },
    work: { order: 4, enabled: true, heading: "Experiência Profissional", PresenteLabel: "Presentee" },
    professionalSummary: { order: 5, enabled: true, heading: "Perfil Profissional", PresenteLabel: "Presentee" },
    education: { order: 6, enabled: false, heading: "Educação" },
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
      label: "Contato",
      heading: "Entre em contato!",
      text: "Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.",
    },
  },
  professionalSummary: [
    {
      title: "SEO Técnico e de Performance",
      text: "Ênfase em HTML semântico, acessibilidade (A11y), design totalmente responsivo, otimização técnica para mecanismos de busca, SEO de marca e otimização de nível especialista para as Core Web Vitals.",
    },
    {
      title: "Infraestrutura:",
      text: "Sólida experiência em DevOps, segurança e suporte técnico, garantindo ambientes estáveis ​​e escaláveis.",
    },
    {
      title: "A pilha moderna do WordPress",
      text: "Implementação avançada utilizando o ecossistema Roots.io (Trellis, Bedrock, Sage) para ambientes WordPress e WooCommerce seguros, escaláveis ​​e com controle de versão.",
    },
    {
      title: "Tecnologia Web Moderna",
      text: "Desenvolvimento full-stack com Laravel, PHP e Astro, utilizando Tailwind CSS (v4) e Alpine.js para interfaces leves e extremamente rápidas.",
    },
    {
      title: "DevOps e Infraestrutura",
      text: "Sólida experiência em gerenciamento de stacks LEMP (Nginx), implantações automatizadas via Ansible/Vagrant e desempenho de borda via Cloudflare.",
    },
    {
      title: "Idiomas",
      text: "Inglês fluente e português nativo.",
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
      title: "Desenvolvedor Full Stack e Especialista SEO",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "Fevereiro 2025",
      end: undefined,
      description:
        "Feito a reformulação e o desenvolvimento completo do site antigo para uma plataforma de e-commerce moderna (Roots.io stack, WordPress CMS e WooCommerce). Implementação de estratégias avançadas de SEO para impulsionar o crescimento orgânico.",
    },
    {
      company: "PROS AP​",
      // href: "https://nectardaamazonia.com.br",
      badges: [""],
      location: "Macapá, Amapá - Brazil",
      title: "Desenvolvedor Full Stack e Especialista SEO",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "Abril 2022",
      end: "Outubro 2022",
      description:
        "Projetei e desenvolvi websites profissionais utilizando a plataforma Roots.io (WordPress como CMS). Gerenciei a presença nas redes sociais e a administração das contas do Twitter/X.",
    },
    {
      company: "Intelmax-IP (Remote)​​",
      href: "http://www.intelmax-ip.com",
      badges: [""],
      location: "remote job - Dubai",
      title: "Desenvolvedor Web e Especialista SEO",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "Novembro 2021",
      end: "Fevereiro 2022",
      description:
        "Otimização de SEO, reformulação de páginas existentes e criação de novas seções para um site corporativo com sede em Dubai.",
    },
    {
      company: "Paradox Zero",
      href: "https://paradoxzero.com",
      badges: [""],
      location: "Recife - Pernambuco - Brazil",
      title: "Desenvolvedor Full Stack",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "Março 2016",
      end: "Julho 2016",
      description:
        "Desenvolvi soluções WordPress usando a pilha LAMP, Underscores (_s) e JointsWP.s",
    },
    {
      company: "Pitang IT",
      href: "https://www.pitang.com",
      badges: [""],
      location: "Recife - Pernambuco",
      title: "PHP /Desenvolvedor Web",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "Fevereiro 2014",
      end: "Fevereiro 2016",
      description:
        "Desenvolvi projetos corporativos utilizando PHP, Drupal 7 e a tecnologia Liferay.",
    },
    {
      company: "Mirai Totalle",
      // href: "https://www.pitang.com",
      badges: [""],
      location: "Recife - Pernambuco - Brazil",
      title: "Desenvolvedor Full Stack",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "Novembro 2011",
      end: "Novembro 2013",
      description:
        "Desenvolvimento web em conjunto com suporte ao usuário, redes, gerenciamento de servidor de e-mail e manutenção de hardware.",
    },
    {
      company: "Refinaria Promocional",
      // href: "https://www.pitang.com",
      badges: [""],
      location: "Curitiba - Paraná - Brazil",
      title: "Desenvolvedor Web",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "Maio 2010",
      end: "Março 2011",
      description:
        "Desenvolvi aplicações web utilizando CodeIgniter, Zend Framework, Drupal (6/7) e WordPress.",
    },
    {
      company: "Grupo Ometz",
      // href: "https://www.pitang.com",
      badges: [""],
      location: "Curitiba - Paraná - Brazil",
      title: "Desenvolvedor Web",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "Julho 2008",
      end: "Fevereiro 2009",
      description:
        "Desenvolvi plataformas web utilizando CodeIgniter, ExpressionEngine e WordPress.",
    },
    {
      company: "Volvo Bank (Volvo do Brasil)",
      // href: "https://www.pitang.com",
      badges: [""],
      location: "Curitiba - Paraná - Brazil",
      title: "Analista de Suporte ",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "Abril 2007",
      end: "Novembro 2007",
      description:
        "Prestei suporte técnico e realizei análises de sistemas para a divisão financeira.",
    },
    {
      company: "Volvo IT (Volvo do Brasil)",
      // href: "https://www.pitang.com",
      badges: [""],
      location: "Curitiba - Paraná - Brazil",
      title: "Analista de Suporte ",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "Fevereiro 2006",
      end: "Novembro 2006",
      description:
        "Analista de Suporte na migração de todos os OS Windows.",
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
      dates: "Abril 2026 - Presente",
      active: true,
      description:
        "Loja virtual especializada em vinhos brasileiros, vinícolas artesanais, produções limitadas em micro-lotes e com uma excelente seleção.",
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
      dates: "Fevereiro 2025 - Presente",
      active: true,
      description:
        "Startup brasileira que trabalha para promover o desenvolvimento sustentável na Amazônia por meio da produção de mel por meio da apicultura de abelhas sem ferrão (meliponicultura) e iniciativas focadas na bioeconomia. Site desenvolvido com a plataforma roots.io (WordPress) e WooCommerce.",
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
      dates: "Dezembro 2020 - Presente",
      active: true,
      description:
        "Um restaurante contemporâneo de slow food, focado em oferecer pratos de alta qualidade feitos com ingredientes de origem local. Site desenvolvido com a plataforma roots.io (WordPress).",
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
      title: "SFCO 179 Multiespaço",
      href: "https://sfco179.com.br",
      dates: "Fevereiro 2021 - Presente",
      active: true,
      description:
        "Multiespaço localizado no Centro Histórico de Curitiba, no Brasil, que oferece um restaurante (Tijolo CWB Restaurant), uma cafeteria, um espaço para eventos e uma fábrica de chocolate. Site desenvolvido com a plataforma roots.io (WordPress).",
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
      dates: "Janeiro 2017 - Presente",
      active: true,
      description:
        "Site criado para aPresentear conteúdo e fatos históricos de forma séria, educativa e imparcial. Uma plataforma de conteúdo histórico consolidada (ativa desde 2017). História do Brasil e do mundo. Construído com a plataforma roots.io (WordPress).",
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
      dates: "Outubro 14th - 16th, 2022",
      location: "Seattle, Washington",
      description: "Built a real-time collaborative code review tool using WebSockets and Monaco Editor. Won best developer tool.",
      image: "https://avatar.vercel.sh/pnw-hacks?size=40",
      win: "Best Developer Tool",
      links: [],
    },
    {
      title: "nwHacks 2022",
      dates: "Janeiro 15th - 16th, 2022",
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
      dates: "Outubro 9th - 10th, 2021",
      location: "Seattle, Washington",
      description: "Developed a carbon footprint tracker that integrates with Google Maps to suggest lower-emission commute alternatives.",
      image: "https://avatar.vercel.sh/dubhacks-2021?size=40",
      win: "Best Sustainability Hack",
      links: [],
    },
    {
      title: "StormHacks 2021",
      dates: "Abril 24th - 25th, 2021",
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
      dates: "Novembro 14th - 15th, 2020",
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
      dates: "Março 7th - 8th, 2020",
      location: "Vancouver, BC",
      description: "Built a mobile-first job board specifically for junior developers, aggregating listings from GitHub Jobs, HN Who's Hiring, and LinkedIn.",
      image: "https://avatar.vercel.sh/cmd-f-2020?size=40",
      links: [],
    },
    {
      title: "nwHacks 2020",
      dates: "Janeiro 11th - 12th, 2020",
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
      dates: "Janeiro 18th - 19th, 2019",
      location: "Hamilton, Ontario",
      description: "Created a VS Code extension that suggests variable names based on type signatures and surrounding code context using a local ML model.",
      image: "https://avatar.vercel.sh/deltahacks-v?size=40",
      links: [],
    },
    {
      title: "StormHacks 2019",
      dates: "Março 2nd - 3rd, 2019",
      location: "Burnaby, BC",
      description: "Built a network latency heatmap tool that visualises CDN performance across regions using real user data injected via a lightweight JS snippet.",
      image: "https://avatar.vercel.sh/stormhacks-2019?size=40",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],
} as const;
