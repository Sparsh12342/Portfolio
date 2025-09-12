# Portfolio Page

A simple and elegant React portfolio page to showcase your projects deployed on Vercel.

## Features

- Responsive grid layout
- Hover effects and smooth animations
- Clickable project cards that open deployments in new tabs
- Modern gradient background
- Technology tags for each project
- Mobile-friendly design

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customizing Your Projects

Edit the `projects` array in `src/App.js` to add your own projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief description of your project",
    image: "https://your-image-url.com/image.jpg",
    url: "https://your-project.vercel.app",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  // Add more projects...
];
```

## Deployment

This project is ready to be deployed on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy!

## Technologies Used

- React 18
- CSS3 with modern features
- Responsive design
- Vercel deployment ready
