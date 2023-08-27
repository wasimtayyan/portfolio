import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  promptopia,
  shopy,
  mongodb,
  git,
  github,
  GitHub,
  Next,
  Recoded,
  Learnu,
  fierbase,
  Muhanned,
  Vuslat,
  Wisam
} from "../assets";
import { pngwing } from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Responsive Design",
    icon: mobile,
  },
  // {
  //   title: "Web Application Development",
  //   icon: backend,
  // },
  {
    title: "User Interface (UI) Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: Next,
  },
  {
    name: "Firebase",
    icon: fierbase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "GitHub",
    icon: GitHub,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Video Editor",
    company_name: "Upwork",
    icon: pngwing,
    iconBg: "#383E56",
    date: "April 2022 - January 2023",
    points: [
      "Collaborated with a diverse clientele from varied backgrounds.",
      "Specialized in video editing for vlogs and YouTube channels.",
      "Ensured timely delivery of polished final products to clients.",
      "Executed precise color grading to enhance visual aesthetics.",
    ],
  },
  {
    title: "Student at Re:coded",
    company_name: "Re:coded",
    icon: Recoded,
    iconBg: "#E6DEDD",
    date: "March 2023 - Sep 2023",
    points: [
      "Learned fundamentals of HTML, CSS, and JavaScript. Collaborated with students on projects",
      "Learned importance of UX/UI design with Figma.",
      "Gained hands-on experience with React, and Next.js.",
      "Learned collaborative teamwork and Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Develop a Learning web Application",
    company_name: "Capstone Project for FE bootcamp",
    icon: Recoded,
    iconBg: "#E6DEDD",
    date: "July 2023 - sep 2023",
    points: [
      "Led a team of 5 developers to create an immersive learning web app for students, professionals,and lifelong learners.",
      "Oversaw end-to-end development of an interactive learning app with diverse courses andvisually engaging content.",
      "Managed collaborative effort to build an innovative app enabling users to personalize learning,track progress, and engage in interactive exercises.",
      "Demonstrated leadership in fostering innovation, resulting in timely project completion and successful app launch.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Wasim is an exceptional student whose dedication, quick grasp of complex concepts, and collaborative spirit truly set him apart. His passion and proficiency make him an invaluable asset to any team. I have no doubt his future will be marked by continued excellence.",
    name: "Muhanned Noman",
    designation: "Senior Trainer",
    company: "Re:coded",
    image: Muhanned,
    linkedIn: "https://www.linkedin.com/in/muhannednoman/"
  },
  {
    testimonial:
      "Wasim is energetic, quick learner, investigative disciplined and prone to teamwork. I feel lucky to have realized our Bootcamp project together.",
    name: "Vuslat Sana",
    designation: "Team Member",
    company: "Bootcamp Capstone Project",
    image: Vuslat,
    linkedIn: "https://www.linkedin.com/in/vuslat-sena-emre/"
  },
  {
    testimonial:
      "Wasim's prowess in software development shines, marked by rapid learning and unwavering dedication. Truly impressive",
    name: "Wisam Naji",
    designation: "Instruction Manager for Software Development",
    company: "Re:coded",
    image: Wisam,
    linkedIn: "https://www.linkedin.com/in/wisamnaji/"
  },
];

const projects = [
  {
    name: "Promptopia",
    description:
      " Promptopia is an open- source AI prompting tool designed for the modern world.With Promptopia, you can effortlessly discover, create, and share creative prompts",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/wasimtayyan/promptopia",
  },
  {
    name: "Nominate movies",
    description:
      "This web application allows users to search for and choose five movies. The app then determines and presents the winning movie among the selected options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shopy,
    source_code_link: "https://github.com/wasimtayyan/shopify-challenge",
  },
  {
    name: "Learn U",
    description:
      "The objective of this application is to create an interactive and captivating educational platform that offers users a customized learning experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind & css",
        color: "pink-text-gradient",
      },
    ],
    image: Learnu,
    source_code_link: "https://github.com/202303-PRM-TR-FEW/Learning-app-team-5",
  },
];

export { services, technologies, experiences, testimonials, projects };
