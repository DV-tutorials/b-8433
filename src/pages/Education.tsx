import { Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on Neural Networks.",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "MIT",
      location: "Cambridge, MA",
      period: "2014 - 2018",
      description: "Graduated with honors. Led the university's coding club and participated in multiple hackathons.",
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Education</h1>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-card rounded-lg p-6 hover:bg-card-hover transition-colors">
              <h2 className="text-2xl font-bold text-blue-400 mb-2">{edu.degree}</h2>
              <h3 className="text-xl font-semibold mb-2">{edu.school}</h3>
              
              <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
              
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;