import React, { useState, useEffect } from "react";
import {
  Activity,
  Database,
  Code,
  ArrowRight,
  ChevronRight,
  Globe,
  Sparkles,
  Cpu,
  BarChart,
} from "lucide-react";

const OurExpertise = () => {
  // State for animations
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState(1);

  // Skills data with more detailed information
  const skills = [
    {
      id: 1,
      title: "Machine Learning & AI",
      percentage: 86,
      icon: <Cpu size={24} />,
      color: "#10b981",
      description:
        "Building intelligent systems that learn from data, including natural language processing, computer vision, and predictive analytics.",
      features: [
        "Natural Language Processing",
        "Predictive Models",
        "Computer Vision",
        "Neural Networks",
      ],
    },
    {
      id: 2,
      title: "Data Analytics",
      percentage: 90,
      icon: <BarChart size={24} />,
      color: "#06b6d4",
      description:
        "Transforming raw data into actionable insights through statistical analysis, data visualization, and business intelligence.",
      features: [
        "Statistical Analysis",
        "Data Visualization",
        "Business Intelligence",
        "ETL Pipelines",
      ],
    },
    {
      id: 3,
      title: "Web & Mobile Development",
      percentage: 89,
      icon: <Globe size={24} />,
      color: "#8b5cf6",
      description:
        "Creating responsive web applications and mobile solutions with modern frameworks and best practices for optimal user experience.",
      features: [
        "Responsive Design",
        "Cross-platform Apps",
        "Progressive Web Apps",
        "API Development",
      ],
    },
  ];

  // Animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation for progress bars
  const [progressValues, setProgressValues] = useState(skills.map(() => 0));

  useEffect(() => {
    if (isVisible) {
      const timers = skills.map((skill, index) => {
        return setTimeout(() => {
          setProgressValues((prev) => {
            const newValues = [...prev];
            newValues[index] = skill.percentage;
            return newValues;
          });
        }, 500 + index * 300);
      });

      return () => timers.forEach((timer) => clearTimeout(timer));
    }
  }, [isVisible]);

  return (
    <div className="w-full mx-auto p-8 bg-white">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-5xl font-bold mb-3 text-gray-800 relative inline-flex items-center gap-2">
              Our Expertise
              <Sparkles className="text-yellow-400" size={28} />
            </h2>
            <div className="h-1.5 w-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine cutting-edge technologies with industry expertise to
            deliver exceptional solutions tailored to your business needs.
          </p>
        </div>

        {/* Hexagonal/Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform ${
                hoveredSkill === skill.id
                  ? "scale-105 shadow-xl -translate-y-2"
                  : ""
              }`}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => setActiveTab(skill.id)}
            >
              <div
                className="h-2"
                style={{ backgroundColor: skill.color }}
              ></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div
                    className="p-2 rounded-lg mr-3"
                    style={{ backgroundColor: `${skill.color}25` }}
                  >
                    <div
                      className="text-white p-1.5 rounded-md"
                      style={{ backgroundColor: skill.color }}
                    >
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {skill.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-500">Proficiency</div>
                  <div className="font-bold text-gray-700">
                    {progressValues[index]}%
                  </div>
                </div>

                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full transition-all duration-1000 ease-out rounded-full"
                    style={{
                      width: `${progressValues[index]}%`,
                      backgroundColor: skill.color,
                    }}
                  ></div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {skill.description}
                </p>

                <div className="flex justify-end">
                  <button
                    className={`text-sm flex items-center gap-1 font-medium transition-colors ${
                      hoveredSkill === skill.id
                        ? "text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    Learn more
                    <ChevronRight
                      size={16}
                      className={`transition-transform ${
                        hoveredSkill === skill.id ? "translate-x-1" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Tab Panel */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex  border-b">
            {skills.map((skill) => (
              <button
                key={skill.id}
                className={`flex-1 py-4 px-6 font-medium text-center transition-all ${
                  activeTab === skill.id
                    ? "text-gray-800 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(skill.id)}
              >
                <div className="flex items-center justify-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: `${
                        skills.find((s) => s.id === skill.id).color
                      }20`,
                    }}
                  >
                    {skills.find((s) => s.id === skill.id).icon}
                  </div>
                  {skill.title}
                </div>
              </button>
            ))}
          </div>

          <div className="p-6 flex flex-col items-center justify-center">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={`transition-all duration-300 flex items-center justify-center flex-col ${
                  activeTab === skill.id
                    ? "opacity-100 block"
                    : "opacity-0 hidden"
                }`}
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {skill.title}
                </h3>
                <p className="text-gray-600 mb-6">{skill.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {skill.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${skill.color}20` }}
                      >
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: skill.color }}
                        ></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:from-blue-600 hover:to-teal-500">
                  EXPLORE SERVICES
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            {
              value: "250+",
              label: "Projects Completed",
              icon: <Code size={20} className="text-blue-500" />,
            },
            {
              value: "50+",
              label: "Team Members",
              icon: <Activity size={20} className="text-green-500" />,
            },
            {
              value: "10+",
              label: "Years Experience",
              icon: <Database size={20} className="text-purple-500" />,
            },
            {
              value: "99%",
              label: "Client Satisfaction",
              icon: <Sparkles size={20} className="text-yellow-500" />,
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-md text-center transition-all duration-500"
            >
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
