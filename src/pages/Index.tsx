import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: "Project 1",
      description: "Description of your amazing project",
      demoLink: "https://demo1.com",
      codeLink: "https://github.com/yourusername/project1"
    },
    {
      title: "Project 2",
      description: "Description of another cool project",
      demoLink: "https://demo2.com",
      codeLink: "https://github.com/yourusername/project2"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2 md:col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h1>
          <p className="text-gray-300 text-lg">
            A software developer with a passion for creating beautiful and functional web experiences
          </p>
        </div>

        {/* About Card */}
        <div className="bento-card row-span-2 md:row-span-2">
          <h2 className="text-2xl font-bold mb-6">About me</h2>
          <p className="text-gray-300 text-lg mb-6">
            I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-400">My tools:</p>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        {/* Time Card */}
        <div className="bento-card">
          <h2 className="text-lg text-gray-400 mb-4">Current Time</h2>
          <p className="text-3xl font-bold font-mono">
            {time.toLocaleTimeString()}
          </p>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-2 md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-6 bg-card-hover rounded-lg">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:your@email.com"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;