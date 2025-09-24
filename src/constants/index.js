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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  gemini,
  samvid,
  shirt,
} from "../assets";

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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "3D Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ui/ux Designer",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "In College",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - Dec 2024",
    points: [
      "Started as a frontend developer by building responsive web apps with React.js and modern tools.",
      "Gradually explored advanced UI/UX, learning animations with GSAP, Framer Motion, and React Three Fiber to create smooth, interactive experiences.",
      "Focused on clean design, cross-browser compatibility, and performance optimization while improving user experience.",
      "Collaborated with designers and developers to bring ideas to life through engaging and user-friendly interfaces.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2025 - June 2025",
    points: [
      "Started with frontend development by building responsive web apps using React.js, Next.js, and modern UI libraries.",
      "Explored backend technologies like Node.js, Express.js, and MongoDB to create full-stack applications.",
      "Implemented secure authentication, REST APIs, and database integration to deliver complete solutions.",
      "Focused on performance optimization, scalability, and clean code to meet client needs effectively.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2025 - Present",
    points: [
      "Building and maintaining full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Currently expanding expertise in Next.js to deliver high-performance and SEO-friendly applications.",
      "Designing and implementing responsive, user-friendly interfaces with modern UI frameworks and animation libraries.",
      "Developing secure APIs, handling authentication, and managing databases to build scalable solutions.",
      "Collaborating effectively with designers and developers to create polished, high-quality products.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Samvid (Hackathon Project, 2025)",
    description:
      "Built a platform for citizens to report and track civic issues (potholes, sanitation, streetlights) with geolocation tagging.",
    tags: [
      {
        name: "Nextjs",
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
    image: samvid,
    source_code_link: "https://github.com/Vishal-RAJ-DEV/Hackathon",
  },
  {
    name: "3D T-Shirt Customization Website ",
    description:
      "Developed an interactive website where users can customize T-shirts in 3D (color, patterns, logo uploads).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: shirt,
    source_code_link: "https://github.com/Vishal-RAJ-DEV/3D-T-Shirt-",
  },
  {
    name: "Gemini AI Assistant ",
    description:
      "Created an AI assistant powered by Gemini API for text, image, and file search. Added a dark/light mode toggle for accessibility and user preference.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Api",
        color: "pink-text-gradient",
      },
    ],
    image: gemini,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
