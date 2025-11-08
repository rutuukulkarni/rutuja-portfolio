// src/data/projects.js

const projects = [
  {
    id: "student-mgmt",
    title: "Student Management System",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    short:
      "A management system to handle student records, CRUD operations, and performance analytics with an intuitive dashboard.",
    image: "/images/student-mgmt.svg",
    live: "#",
    repo: "https://github.com/rutuukulkarni/Student_mgm",
    details: [
      "Admin dashboard for managing student records",
      "CRUD operations with MongoDB backend",
      "Responsive table and form components",
      "Role-based access for teachers and admins",
      "Data visualization with simple analytics",
    ],
  },
  {
    id: "eng-resource-mgmt",
    title: "Engineering Resource Management",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    short:
      "Resource allocation and tracking platform for engineering departments with user roles and real-time updates.",
    image: "/images/mgmt.png",
    live: "#",
    repo: "https://github.com/rutuukulkarni/eng-resource-mgmt",
    details: [
      "Role-based user management (Admin / Employee)",
      "Resource assignment tracking dashboard",
      "JWT-secured routes and API endpoints",
      "Modular design with reusable UI components",
      "Deployed locally; ready for cloud integration",
    ],
  },
   {
    id: "social-media-app",
    title: "Social Media App",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    short:
      "A full-stack social platform featuring authentication, posts, likes, and comments. Secure JWT auth with image uploads and responsive UI.",
    image: "/images/social-media.jpg",
    live: "#", // no live link yet
    repo: "https://github.com/rutuukulkarni/Social-Media-App",
    details: [
      "Built using MERN stack (MongoDB, Express, React, Node)",
      "User authentication with JWT tokens and cookies",
      "Real-time updates for posts and likes",
      "Responsive and modern Tailwind-styled interface",
      "Scalable modular architecture for future features",
    ],
  },
];

export default projects;
