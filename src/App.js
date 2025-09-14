import React from 'react';
import ProjectCard from './components/ProjectCard';
import './App.css';
import logo2 from './img/logo2.png';
import logo from './img/logo.png';
// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Expense Tracker App",
    description: "A full-stack e-commerce application built with React and Node.js",
    image: logo2,
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
    image: logo,   // use the imported variable
    url: "https://halal-restaurant-code-email.vercel.app/",
    technologies: ["React", "API", "Chart.js"]
  },
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
