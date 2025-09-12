import React from 'react';
import ProjectCard from './components/ProjectCard';
import './App.css';

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Expense Tracker App",
    description: "A full-stack e-commerce application built with React and Node.js",
    image: "https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=E-Commerce",
    url: "https://aws-expense-tracker-wpuq.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Lyra AI",
    description: "A collaborative task management tool with real-time updates",
    image: "https://via.placeholder.com/300x200/059669/FFFFFF?text=Task+App",
    url: "https://your-task-app.vercel.app",
    technologies: ["React", "Firebase", "Material-UI"]
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "A beautiful weather dashboard with location-based forecasts",
    image: "https://via.placeholder.com/300x200/DC2626/FFFFFF?text=Weather",
    url: "https://halal-restaurant-code-email.vercel.app/",
    technologies: ["React", "API", "Chart.js"]
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A modern blog platform with markdown support and comments",
    image: "https://via.placeholder.com/300x200/7C3AED/FFFFFF?text=Blog",
    url: "https://your-blog-app.vercel.app",
    technologies: ["Next.js", "Prisma", "PostgreSQL"]
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website with smooth animations",
    image: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Portfolio",
    url: "https://your-portfolio.vercel.app",
    technologies: ["React", "Framer Motion", "Tailwind CSS"]
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with user authentication",
    image: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Chat+App",
    url: "https://your-chat-app.vercel.app",
    technologies: ["React", "Socket.io", "Express"]
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sparsh V Patel Portfolio</h1>
        <p>Projects deployed on Vercel</p>
      </header>
      
      <main className="projects-container">
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
