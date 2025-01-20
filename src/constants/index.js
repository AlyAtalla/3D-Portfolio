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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "LLM Trainer",
    company_name: "Outlier",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2024 - Current",
    points: [
      "working on a variety of projects from generating training data in Arabic to advancing these models to evaluating performance of models.",
      "Conducted systematic analysis of model outputs to identify and address biases in multilingual contexts",

"• Participated in prompt engineering research, developing effective prompting strategies for enhanced model responses",

"• Collaborated with international teams to ensure cultural authenticity in training data and model outputs",

"• Implemented quality control measures for training data, maintaining high standards for dataset integrity",

"• Engaged in cross-model comparative analysis to benchmark performance across different LLM architectures",

"• Contributed to documentation and best practices for training data generation and model evaluation",

"• Specialized in addressing challenges specific to Arabic language processing, including dialectal variations and cultural context"
    ],
  },
  {
    title: "Freelance Full-stack Developer",
    company_name: "People-per-hour",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Current",
    points: [
     " Innovative Solutions: Introduced creative features and functionalities to client projects, resulting in a 20% increase in user engagement.",
      "Client Satisfaction: Maintained a 95% client satisfaction rate through effective communication and understanding of client requirements.",
      "Project Diversification: Successfully managed a diverse range of projects, showcasing adaptability and versatility in development skills."
    ],
  },
  {
    title: "Arabic Teacher",
    company_name: "Preply",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - current",
    points: [
      "Customized Teaching Approaches: Adapted teaching methods, resulting in a 25% improvement in students' language proficiency.",
"Positive Learning Environment: Fostered a positive atmosphere, contributing to a 90% student satisfaction rate.",
"Flexible Scheduling: Accommodated student schedules, achieving a 95% satisfaction rate in terms of lesson timing.",
    ],
  },
  {
    title: "English Teacher",
    company_name: "TEC",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Engaging Lesson Plans: Developed interactive lesson plans, leading to a 15% improvement in student participation.",
"Individualized Support: Provided personalized support, resulting in a 20% increase in student success rates.",
"Promotion of Language Skills: Organized events, contributing to a 30% improvement in students' language skills in real-life contexts.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aly's teaching approach made complex programming concepts accessible and engaging. His patience and dedication to student success is remarkable.",
    name: "Michael Chen",
    designation: "Student",
    company: "Microverse",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Working with Aly was a game-changer for our team. His problem-solving skills and attention to detail brought fresh perspectives to our projects.",
    name: "Sarah Martinez",
    designation: "Project Manager",
    company: "Tech Solutions Inc",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "As a mentor, Aly goes above and beyond. His ability to break down complex problems and guide students through solutions is truly exceptional.",
    name: "David Kumar",
    designation: "Senior Developer",
    company: "CodeCraft Academy",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];


const projects = [
  {
    name: "Bookstore platform",
    description:
"A dynamic web-based bookstore platform that enables users to explore, purchase, and manage their reading collections." ,   tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AlyAtalla/bookstore",
  },
  {
    name: "Catalogue-of-my-things",
    description:
      "n interactive app built with Ruby to add remove,and edit Book collections, Albums, Films and more.",
    tags: [
      {
        name: "ruby",
        color: "blue-text-gradient",
      },
      {
        name: "psql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AlyAtalla/Catalogue-of-my-things",
  },
  {
    name: "Egyptian Art",
    description:
      "The repository serves as a showcase to demonstrate proficiency in utilizing different tools and implementing established practices acquired during prior stages. this is a collaborative project..",
    tags: [
      {
        name: "reacttjs",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AlyAtalla/Egyptian-Art",
  },
];

export { services, technologies, experiences, testimonials, projects };
