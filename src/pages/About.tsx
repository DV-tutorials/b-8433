import { Code2, Coffee, Gamepad2, Music4 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="space-y-8">
          <div className="bg-card rounded-lg p-6">
            <p className="text-lg text-gray-300 mb-6">
              Hi there! I'm a passionate software developer with 5+ years of experience
              building web applications. I specialize in React, TypeScript, and modern
              web technologies. When I'm not coding, you can find me exploring new
              technologies or contributing to open-source projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• React & React Native</li>
                <li>• TypeScript / JavaScript</li>
                <li>• Node.js & Express</li>
                <li>• MongoDB & PostgreSQL</li>
                <li>• AWS & Docker</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Interests</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <span>Coding</span>
                </div>
                <div className="flex items-center gap-2">
                  <Music4 className="w-5 h-5 text-green-400" />
                  <span>Music</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-purple-400" />
                  <span>Gaming</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-yellow-400" />
                  <span>Coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;