import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "Angular", image: "/skills/angular.png", category: "frontend" },
  { name: "HTML", image: "/skills/html.png", category: "frontend" },
  { name: "CSS", image: "/skills/css.png", category: "frontend" },
  { name: "Bootstrap", image: "/skills/bootstrap.png", category: "frontend" },
  { name: "JavaScript", image: "/skills/javascript.png", category: "frontend" },
  { name: "TypeScript", image: "/skills/typescript.png", category: "frontend" },
  { name: "Tailwind CSS", image: "/skills/tailwind.png", category: "frontend" },
  { name: "React.js", image: "/skills/react.png", category: "frontend" },
  { name: "Framer", image: "/skills/framer.png", category: "frontend" },
  { name: "Figma", image: "/skills/figma.png", category: "frontend" },
  { name: "Next.js", image: "/skills/next.png", category: "frontend" },

  // Backend
  { name: "Node.js", image: "/skills/node.png", category: "backend" },
  { name: "Express.js", image: "/skills/express.png", category: "backend" },
  { name: "Mongo DB", image: "/skills/mongo.png", category: "backend" },
  { name: "PostgreSQL", image: "/skills/postgresql.png", category: "backend" },
  { name: "MySQL", image: "/skills/mysql.png", category: "backend" },
  { name: "SQLite", image: "/skills/sqlite.png", category: "backend" },
  { name: "Python", image: "/skills/python.png", category: "backend" },

  //Tools
  { name: "Git", image: "/skills/git.png", category: "tools" },
  { name: "GitHub", image: "/skills/github.png", category: "tools" },
  { name: "VS Code", image: "/skills/vsc.png", category: "tools" },
  { name: "Postman", image: "/skills/postman.png", category: "tools" },
  { name: "Microsoft Office Tools", image: "/skills/office.png", category: "tools" },
  { name: "NPM", image: "/skills/npm.png", category: "tools" },
  { name: "Amazon Web Services", image: "/skills/aws.png", category: "tools" },
  { name: "Microsoft Power BI", image: "/skills/pbi.png", category: "tools" },
  { name: "RapidMiner", image: "/skills/rapidminer.png", category: "tools" },
  { name: "IntelliJ Idea", image: "/skills/intellij.png", category: "tools" },
  { name: "PyCharm", image: "/skills/pycharm.png", category: "tools" },
  { name: "Vite", image: "/skills/vite.png", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2 transition-transform hover:scale-105"
            >
              <div className="bg-card p-3 rounded-lg shadow-xs card-hover">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-sm text-foreground">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
