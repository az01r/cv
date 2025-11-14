import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Paolo Antonio Grosso",
  initials: "PG",
  location: "Torino, Italy, CET",
  locationLink: "https://www.google.com/maps/place/Torino",
  about: "Full Stack Web developer.",
  summary: (
    <>Full Stack Developer with a passion for clean and reusable code.</>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/75796560?v=4",
  contact: {
    email: "paoloantonio.grosso@gmail.com",
    tel: "+393457349295",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/az01r",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/paolo-antonio-grosso-6b340420a/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "CIAC ITS",
      degree: "Tecnico Sviluppo Software",
      start: "2020",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Tinexta Cyber",
      link: "https://www.tinextacyber.com/",
      badges: ["React.js", "Node.js", "TypeScript", "Java", "Bootstrap"],
      title: "Full stack developer",
      start: "2023",
      end: null,
      description: (
        <>
          Responsible for architecting internal tooling with React.js, Node.js,
          TypeScript and MongoDB, alongside maintaining production legacy
          systems built on Java, JSP and Bootstrap for a union of banks.
        </>
      ),
    },
    {
      company: "Estiatech",
      link: "https://www.estiatechnology.com",
      badges: ["Java", "Oracle SQL", "Primefaces"],
      title: "Full stack developer",
      start: "2021",
      end: "2023",
      description: (
        <>
          Developed and maintained an enterprise application in insurance
          sector, managing the entire application lifecycle from UI to backend
          logic. Designed, built and optimized reporting systems utilizing
          scheduled Java batch processing for large-scale data delivery.
        </>
      ),
    },
  ],
  skills: [
    "React.js",
    "Node.js",
    "Flutter",
    "TypeScript",
    "Java EE",
    "Mongo DB",
    "Oracle DB",
  ],
  projects: [
    {
      title: "Forum WebApp",
      techStack: ["React.js", "TypeScript", "Node.js"],
      description: "A forum template application",
      link: {
        label: "https://github.com/az01r/my-forum-app.git",
        href: "https://github.com/az01r/my-forum-app.git",
      },
    },
    {
      title: "Mobile Chat",
      techStack: ["Flutter", "Node.js", "MongoDB"],
      description: "A chat application realised with SocketIO",
      link: {
        label: "https://github.com/az01r/my-chat-app.git",
        href: "https://github.com/az01r/my-chat-app.git",
      },
    },
  ],
} as const;
