const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    role: "Web Developer",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Sales Report",
        description: "Compile and format the weekly sales report.",
        date: "2025-07-20",
        category: "Sales"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Meeting",
        description: "Discuss project updates with the client.",
        date: "2025-07-15",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Database Migration",
        description: "Migrate legacy data to the new database system.",
        date: "2025-07-10",
        category: "Development"
      }
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    role: "Frontend Developer", // Added role
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Code Review",
        description: "Review PRs from junior developers.",
        date: "2025-07-19",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Standup",
        description: "Daily team status update.",
        date: "2025-07-18",
        category: "Scrum"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Design Review",
        description: "Failed to submit feedback on UI designs.",
        date: "2025-07-17",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Bug Fixing",
        description: "Fix issues reported in production.",
        date: "2025-07-20",
        category: "Debugging"
      }
    ],
    taskStats: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    role: "Backend Developer", // Added role
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Backend API Development",
        description: "Implement endpoints for the new module.",
        date: "2025-07-21",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Unit Testing",
        description: "Write and run unit tests for service layer.",
        date: "2025-07-16",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Documentation",
        description: "Update internal documentation for APIs.",
        date: "2025-07-17",
        category: "Documentation"
      }
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    role: "DevOps Engineer", // Added role
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Feature Deployment",
        description: "Deploy new chat feature to staging.",
        date: "2025-07-14",
        category: "Deployment"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Monitor Logs",
        description: "Monitor application logs for anomalies.",
        date: "2025-07-20",
        category: "Monitoring"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Security Audit",
        description: "Missed the internal security audit deadline.",
        date: "2025-07-12",
        category: "Security"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Optimize Queries",
        description: "Improve performance of SQL queries.",
        date: "2025-07-20",
        category: "Database"
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",
    role: "QA Engineer", // Added role
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "UI Testing",
        description: "Test responsive behavior across browsers.",
        date: "2025-07-19",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Feedback Session",
        description: "Provide feedback to interns on their tasks.",
        date: "2025-07-15",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Daily Sync",
        description: "Participate in daily status sync.",
        date: "2025-07-18",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Patch Deployment",
        description: "Deployment failed due to server error.",
        date: "2025-07-16",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Content Review",
        description: "Review updated help center articles.",
        date: "2025-07-20",
        category: "Content"
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    }
  }
];


const admin = [
  {
    id: 1,
    firstName: "Nirupam",
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
}