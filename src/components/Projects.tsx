import { ExternalLink, Github, Download, Star } from "lucide-react";
const projects = [{
  title: "Simple Paintball",
  description: "Developed a Minecraft server plugin to entertain kids during free time. Published to websites gaining 2K+ downloads and an average 4.5/5-star review.",
  highlights: ["2K+ downloads with 4.5/5-star average review", "Implemented continuous delivery using TravisCI", "Collaborated with server administrators for feedback"],
  tech: ["Java", "Spigot API", "Maven", "TravisCI", "Git"],
  github: "https://github.com/kaifkhurshid/simple-paintball",
  external: "#",
  stats: {
    downloads: "2K+",
    rating: "4.5/5"
  }
}, {
  title: "Gitlytics",
  description: "A full-stack web application that visualizes GitHub data to show collaboration patterns. Uses Flask REST API backend with React frontend.",
  highlights: ["Full-stack application with Flask and React", "GitHub OAuth integration for repository data", "Data visualization for collaboration insights"],
  tech: ["Python", "Flask", "React", "PostgreSQL", "Docker"],
  github: "https://github.com/kaifkhurshid/gitlytics",
  external: "#"
}];
const Projects = () => {
  return <section id="projects" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            Featured Projects
          </h2>
          <div className="h-px bg-border flex-1 max-w-md" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => <div key={project.title} className="group relative p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover-lift">
              {/* Project Content */}
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left Side - Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-primary font-mono text-sm mb-2">
                        Featured Project
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Stats Badge */}
                    {project.stats && <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Download size={14} className="text-primary" />
                          <span>{project.stats.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Star size={14} className="text-primary fill-primary" />
                          <span>{project.stats.rating}</span>
                        </div>
                      </div>}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        {highlight}
                      </li>)}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => <span key={tech} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                        {tech}
                      </span>)}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" aria-label="View source code">
                      <Github size={20} />
                      <span className="text-sm">Source Code</span>
                    </a>
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" aria-label="View live demo">
                      <ExternalLink size={20} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* Right Side - Decorative */}
                <div className="hidden lg:block w-px h-40 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                
                <div className="hidden lg:flex flex-col items-center justify-center w-24">
                  <span className="text-6xl font-bold text-primary/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;