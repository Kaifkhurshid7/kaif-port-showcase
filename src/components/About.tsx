import { Code, Server, Database, Cloud } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, efficient, and well-documented code",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Building scalable APIs and server-side applications",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing efficient schemas and optimizing queries",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "Deploying and managing applications on AWS and other platforms",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl">01.</span> About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-md" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Side - Text */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Kaif, a backend-oriented software engineer based in{" "}
              <span className="text-primary">Ramgarh, Jharkhand</span>. I enjoy
              building reliable and scalable systems that live on the internet.
              My focus is on creating efficient backend solutions that power
              great user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm pursuing my{" "}
              <span className="text-primary">B.Tech in Computer Science</span>{" "}
              at XIM University, where I serve as the Chairperson of the ACM
              Student Chapter, leading 60+ members and organizing technical
              events to foster a culture of learning and innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've had the opportunity to work on various projects, from
              developing a{" "}
              <span className="text-primary">Minecraft server plugin</span> with
              2K+ downloads to building full-stack applications. I'm passionate
              about DSA, system design, and continuously improving my craft.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>

            {/* Tech List */}
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {["Python", "Java", "Node.js", "PostgreSQL", "Docker", "AWS"].map(
                (tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">▹</span>
                    <span className="font-mono">{tech}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right Side - Photo Placeholder */}
          <div className="lg:col-span-2 relative group">
            <div className="relative">
              {/* Image Frame */}
              <div className="relative z-10 rounded-lg overflow-hidden bg-primary/10 aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">KK</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Backend Engineer
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Border */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-lg -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2" />
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
