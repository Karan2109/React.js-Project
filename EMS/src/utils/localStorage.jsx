// localStorage.clear();

const employees = [
  {
    id: 1,
    firstname: "Ravi",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        title: "Fix website bug",
        description: "Resolve the issue causing slow page load times.",
        date: "2025-04-05",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Design homepage",
        description: "Create a new homepage layout in Figma.",
        date: "2025-04-06",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write API documentation",
        description: "Document all backend APIs in Swagger.",
        date: "2025-04-07",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Optimize database queries",
        description: "Improve SQL queries for faster performance.",
        date: "2025-04-05",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Create user authentication",
        description: "Implement login/logout using JWT.",
        date: "2025-04-06",
        category: "Backend",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Test API endpoints",
        description: "Run unit tests for all API endpoints.",
        date: "2025-04-07",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstname: "Aman",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Set up CI/CD pipeline",
        description: "Automate deployments using GitHub Actions.",
        date: "2025-04-05",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Review pull requests",
        description: "Check and approve pending PRs on GitHub.",
        date: "2025-04-06",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix UI responsiveness",
        description: "Ensure mobile compatibility for all pages.",
        date: "2025-04-07",
        category: "Frontend",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstname: "Neha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Set up analytics",
        description: "Integrate Google Analytics for tracking.",
        date: "2025-04-05",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Update privacy policy",
        description: "Ensure compliance with new GDPR rules.",
        date: "2025-04-06",
        category: "Legal",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Deploy staging server",
        description: "Deploy new changes to staging for testing.",
        date: "2025-04-07",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 5,
    firstname: "Anjali",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Schedule team meeting",
        description: "Organize a weekly sync-up meeting.",
        date: "2025-04-05",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare client report",
        description: "Generate a performance report for the client.",
        date: "2025-04-06",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update documentation",
        description: "Revise project README and docs.",
        date: "2025-04-07",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    firstname: "Karthik",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
  // console.log("employees", employees);
  // console.log("admin", admin);
};
