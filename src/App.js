import React from 'react';
import ProjectCard from './components/ProjectCard';
import './App.css';
import logo2 from './img/logo2.png';
import logo from './img/logo.png';
import logo3 from './img/logo3.png';
// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Expense Tracker App",
    description: "A full-stack expense tracking app built with React and Node.js",
    image: logo2,
    url: "https://aws-expense-tracker-wpuq.vercel.app/",
    technologies: ["React", "BERT", "NodeJs"]
  },
  {
    id: 2,
    title: "Lyra AI",
    description: "An aritificial intelligence music translator app",
    image: logo3,
    url: "https://lyra-ai-capstone-project.vercel.app/",
    technologies: ["React", "Tensorflow", "Pytorch"]
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "A simple and easy website takes orders and sends them to local restaurant",
    image: logo,   // use the imported variable
    url: "https://halal-restaurant-code-email.vercel.app/",
    technologies: ["CSS", "HTML", "Java"]
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


