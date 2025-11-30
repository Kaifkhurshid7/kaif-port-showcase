import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from "lucide-react";
const education = [{
  institution: "XIM University",
  degree: "Bachelors of Technology in Computer Science",
  location: "Bhubaneswar, Odisha",
  period: "July 2023 – Present",
  current: true
}, {
  institution: "Agrasen DAV Public School",
  degree: "Higher Secondary (Class XII)",
  location: "Ramgarh, Jharkhand",
  period: "2021 - 2023",
  board: "CBSE"
}, {
  institution: "Agrasen DAV Public School",
  degree: "High School (Class X)",
  location: "Ramgarh, Jharkhand",
  period: "2011 - 2021",
  board: "CBSE"
}];
const certificates = [{
  title: "Full-Stack Web Development Bootcamp",
  issuer: "Angela Yu (Udemy)",
  link: "#"
}];
const positions = [{
  title: "Chairperson",
  organization: "ACM Student Chapter – XIM University",
  description: "Led 60+ members, organized 10+ technical events, and initiated coding practice groups and project development activities for the chapter."
}, {
  title: "Executive Member",
  organization: "Career Service Advisory – XIM University",
  description: "Managed training and development activities for 60+ students and conducted coding practice sessions and placement preparation workshops."
}];
const Education = () => {
  return <section id="education" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            Education & Experience
          </h2>
          <div className="h-px bg-border flex-1 max-w-md" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" size={20} />
              Education
            </h3>
            
            <div className="relative space-y-6">
              {/* Timeline Line */}
              <div className="absolute left-3 top-3 bottom-3 w-px bg-border" />
              
              {education.map((edu, index) => <div key={index} className="relative pl-10">
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${edu.current ? "border-primary bg-primary/20" : "border-border bg-card"}`}>
                    <div className={`w-2 h-2 rounded-full ${edu.current ? "bg-primary animate-pulse" : "bg-muted-foreground"}`} />
                  </div>
                  
                  <div className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">
                        {edu.institution}
                      </h4>
                      {edu.current && <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                          Current
                        </span>}
                    </div>
                    <p className="text-primary text-sm mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Certificates & Positions */}
          <div className="space-y-8">
            {/* Certificates */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="text-primary" size={20} />
                Certificates
              </h3>
              
              <div className="space-y-4">
                {certificates.map((cert, index) => <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover-lift">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {cert.issuer}
                        </p>
                      </div>
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </a>)}
              </div>
            </div>

            {/* Positions of Responsibility */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                  ★
                </span>
                Positions of Responsibility
              </h3>
              
              <div className="space-y-4">
                {positions.map((pos, index) => <div key={index} className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                    <h4 className="font-semibold text-foreground">{pos.title}</h4>
                    <p className="text-primary text-sm mb-2">{pos.organization}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pos.description}
                    </p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Education;