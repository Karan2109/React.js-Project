import Ecomm from "./assets/Ecomm.png";
import Gym from "./assets/gym1.png";
import EMS from "./assets/EMS.png";
import Blog from "./assets/Blog.png";

export const PROJECTS = [
  {
    title: "Employee Management System",
    image: EMS,
    description:
      "Employee Management System (EMS) is a responsive web application built using React.js, Tailwind CSS, Redux, and Context API. It features a role-based dashboard for Admins and Employees, with all data stored locally using LocalStorage to ensure smooth performance without external dependencies.",
    technologies: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "LocalStorage",
      "Redux",
      "Authentication",
      "CRUD",
    ],
    viewLink: "https://employeemanagementsystemems.netlify.app/",
    codeLink: "https://github.com/Karan2109/Employee-Management-System-EMS-",
  },
  {
    title: "Blog Post (AppWrite)",
    image: Blog,
    description:
      "Blog Website is a dynamic and fully responsive web application developed using JavaScript, React.js, and Tailwind CSS. The project features a seamless authentication system, CRUD functionality for managing blog posts, and a clean user experience powered by React Router for smooth navigation. Built on AppWrite (BaaS) for backend services, it efficiently handles real-time data operations while managing user sessions through Session Storage and persistent data with Local Storage. The app uses a combination of Redux and Context API for robust state management, ensuring scalability and maintainability. API integration allows for flexible data flow and enhances the app’s dynamic capabilities",
    technologies: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "AppWrite (BaaS)",
      "Redux",
      "Context API",
      "React Router",
      "API",
      "Session Storage",
      "Local Storage",
      "CRUD",
      "Authentication",
    ],
    viewLink: "https://appwriteblogpost.netlify.app/",
    codeLink: "https://github.com/Karan2109/AppWrite_Blog_Post",
  },
  {
    title: "E-Commerce Website UI",
    image: Ecomm,
    description:
      "A fully designed e-commerce website UI built using HTML, CSS, and JavaScript, featuring product listings and a shopping cart interface.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    viewLink: "https://artistcart.netlify.app/",
    codeLink: "https://github.com/Karan2109/E-commerce-Website",
  },
  {
    title: "Fitness Website UI",
    image: Gym,
    description:
      "A fully responsive gym website UI built using HTML, CSS, and JavaScript, featuring sections like home, services, trainers, and contact..",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    viewLink: "https://fitnespoint.netlify.app/",
    codeLink: "https://github.com/Karan2109/Gym-Management",
  },
];
