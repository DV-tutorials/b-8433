import { Building2, Calendar, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      period: "2020 - Present",
      description: "Leading a team of developers working on Google Cloud Platform. Implemented key features that improved system performance by 40%.",
      technologies: ["React", "Node.js", "Kubernetes", "Go"],
      link: "https://google.com"
    },
    {
      title: "Software Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      period: "2018 - 2020",
      description: "Developed and maintained core features for Microsoft Azure. Collaborated with cross-functional teams to deliver high-quality solutions.",
      technologies: ["TypeScript", "React", "Azure", "C#"],
      link: "https://microsoft.com"
    },
    {
      title: "Software Developer Intern",
      company: "Amazon",
      location: "Seattle, WA",
      period: "Summer 2017",
      description: "Worked on AWS Lambda features and contributed to internal tools development.",
      technologies: ["Python", "AWS", "Docker"],
      link: "https://amazon.com"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card rounded-lg p-6 hover:bg-card-hover transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-blue-400">{exp.title}</h2>
                <a 
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;