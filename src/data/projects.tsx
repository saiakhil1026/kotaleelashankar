import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";


const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "manovaktha",
    category: "AI Platform",
    title: "Mano Vaktha– Blending Ancient Wisdom with AI | MERN Stack",
    src: "/assets/project_1.jpeg",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    github: "https://github.com/lschowdary999",
    get content() {
      return (
        <div className="flex flex-col gap-4 w-full mt-4">
          <div className="flex justify-between items-center mb-4">
            <Badge variant="default" className="w-fit font-mono text-xs font-semibold px-3 py-1 bg-primary text-primary-foreground">
              September 2025 – October 2025
            </Badge>
          </div>

          <div className="bg-secondary/40 p-6 rounded-xl border border-border/50 shadow-sm transition-all hover:shadow-md">
            <TypographyH3 className="mb-4 text-primary font-semibold flex items-center gap-2">
              <span className="bg-primary/20 p-2 rounded-lg">🧠</span>
              Project Overview
            </TypographyH3>
            <TypographyP className="font-mono text-muted-foreground leading-relaxed">
              Mano Vaktha is a revolutionary mental wellness platform that bridges the gap between ancient scriptures and modern artificial intelligence. By integrating Google Gemini AI, it provides profound, personalized guidance tailored to individual emotional and mental health needs.
            </TypographyP>
          </div>

          <div className="space-y-6 mt-4">
            <TypographyH3 className="text-xl font-semibold border-b border-border/50 pb-2">Key Accomplishments</TypographyH3>

            <ul className="list-none space-y-4">
              <li className="flex gap-4 items-start bg-card p-4 rounded-lg shadow-sm border border-border/30">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-blue-500 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Immersive 3D Experience</h4>
                  <p className="font-mono text-muted-foreground text-sm mt-1">Led frontend development using React, TypeScript, and Tailwind CSS. Engineered captivating 3D UI elements and interactive environments utilizing Three.js and Spline.</p>
                </div>
              </li>

              <li className="flex gap-4 items-start bg-card p-4 rounded-lg shadow-sm border border-border/30">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-green-500 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Secure & Scalable Architecture</h4>
                  <p className="font-mono text-muted-foreground text-sm mt-1">Architected and deployed critical user features, including customizable wellness journeys, real-time stress analysis algorithms, and a highly responsive multilingual AI chatbot.</p>
                </div>
              </li>

              <li className="flex gap-4 items-start bg-card p-4 rounded-lg shadow-sm border border-border/30">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-purple-500 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Clinically Validated</h4>
                  <p className="font-mono text-muted-foreground text-sm mt-1">Collaborated closely with professional psychologists to validate the platform's methodology, resulting in measurable improvements in user stress relief and overall behavioral metrics.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    id: "docconnect",
    category: "Healthcare Platform",
    title: "DOC-CONNECT | React, Node.js, Tailwind CSS",
    src: "/assets/project_2.jpeg",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
      ],
    },
    live: "#",
    github: "https://github.com/lschowdary999",
    get content() {
      return (
        <div className="flex flex-col gap-4 w-full mt-4">
          <div className="bg-secondary/40 p-6 rounded-xl border border-border/50 shadow-sm transition-all hover:shadow-md">
            <TypographyH3 className="mb-4 text-primary font-semibold flex items-center gap-2">
              <span className="bg-primary/20 p-2 rounded-lg">🩺</span>
              About DOC-CONNECT
            </TypographyH3>
            <TypographyP className="font-mono text-muted-foreground leading-relaxed">
              DOC-CONNECT is an innovative healthcare networking platform that empowers patients to make informed medical decisions. By providing comprehensive doctor profiles, transparent surgery ratings, and seamless scheduling, it significantly reduces the friction in finding specialized medical care.
            </TypographyP>
          </div>

          <div className="space-y-6 mt-4">
            <TypographyH3 className="text-xl font-semibold border-b border-border/50 pb-2">Core Features</TypographyH3>

            <ul className="list-none space-y-4">
              <li className="flex gap-4 items-start bg-card p-4 rounded-lg shadow-sm border border-border/30">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-red-500 font-bold">✦</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Real-Time Scheduling</h4>
                  <p className="font-mono text-muted-foreground text-sm mt-1">Engineered a robust appointment booking system featuring real-time availability synchronization, preventing double-bookings and optimizing doctor schedules.</p>
                </div>
              </li>

              <li className="flex gap-4 items-start bg-card p-4 rounded-lg shadow-sm border border-border/30">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-orange-500 font-bold">✦</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Professional Healthcare Network</h4>
                  <p className="font-mono text-muted-foreground text-sm mt-1">Designed a sophisticated, LinkedIn-style networking interface exclusively for healthcare professionals to showcase medical vacancies and open consultation slots gracefully.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    id: "nexuscore",
    category: "SaaS Platform",
    title: "Nexus Core – Service-as-a-Software Development Platform",
    src: "/assets/project_3.jpeg",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.supabase,
      ],
    },
    live: "#",
    github: "https://github.com/lschowdary999",
    get content() {
      return (
        <div className="flex flex-col gap-4 w-full mt-4">
          <div className="bg-secondary/40 p-6 rounded-xl border border-border/50 shadow-sm transition-all hover:shadow-md">
            <TypographyH3 className="mb-4 text-primary font-semibold flex items-center gap-2">
              <span className="bg-primary/20 p-2 rounded-lg">🚀</span>
              About Nexus Core
            </TypographyH3>
            <TypographyP className="font-mono text-muted-foreground leading-relaxed">
              Nexus Core is a Service-as-a-Software platform designed to transform how software products are built by bridging the gap between purchasing ready-made code and hiring expensive development agencies. At the core of the platform is an AI-powered idea analysis engine that helps non-technical users translate their business concepts into technical project requirements.
            </TypographyP>
            <TypographyP className="font-mono text-muted-foreground leading-relaxed mt-4">
              It connects clients with suitable development teams supervised by a Senior Expert mentor, ensuring professional quality while keeping costs low. The platform handles escrow-based payments, secure workspaces, and offers a unique "Buy and Build" template marketplace, creating opportunities for students and early-career developers.
            </TypographyP>
          </div>

          <div className="space-y-6 mt-4">
            <TypographyH3 className="text-xl font-semibold border-b border-border/50 pb-2">Platform Highlights</TypographyH3>

            <ul className="list-none space-y-4">
              <li className="flex gap-4 items-start bg-card p-4 rounded-lg shadow-sm border border-border/30">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-blue-500 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">AI-Powered Idea Analysis</h4>
                  <p className="font-mono text-muted-foreground text-sm mt-1">Describe a business idea in natural language and automatically generate a structured development plan, including recommended technologies, required team roles, timelines, and budgets.</p>
                </div>
              </li>

              <li className="flex gap-4 items-start bg-card p-4 rounded-lg shadow-sm border border-border/30">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-green-500 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Expert-Mentored Quality Assurance</h4>
                  <p className="font-mono text-muted-foreground text-sm mt-1">Student development teams are overseen by a Senior Expert mentor who reviews code, resolves technical challenges, and approves project milestones, assuring professional delivery.</p>
                </div>
              </li>

              <li className="flex gap-4 items-start bg-card p-4 rounded-lg shadow-sm border border-border/30">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-purple-500 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">"Buy and Build" Workflow</h4>
                  <p className="font-mono text-muted-foreground text-sm mt-1">Clients can purchase a pre-built software template (e-commerce, SaaS tools, etc.) from the marketplace and instantly hire a team through the platform to customize it to their needs.</p>
                </div>
              </li>

              <li className="flex gap-4 items-start bg-card p-4 rounded-lg shadow-sm border border-border/30">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-orange-500 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Secure Escrow Payments</h4>
                  <p className="font-mono text-muted-foreground text-sm mt-1">Integrated Stripe Connect manages secure milestone-based escrow payments, protecting both clients and developers by releasing funds only upon Senior Expert verification.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    },
  },
];
export default projects;
