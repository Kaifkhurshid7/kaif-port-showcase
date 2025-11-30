const skillCategories = [{
  title: "Languages",
  skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
}, {
  title: "Frameworks & Libraries",
  skills: ["Node.js", "Express.js", "React.js", "Flask", "REST APIs"]
}, {
  title: "Developer Tools",
  skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Linux", "Bash"]
}, {
  title: "Databases",
  skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
}, {
  title: "Data Science & ML",
  skills: ["NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "PyTorch", "Matplotlib", "Seaborn"]
}, {
  title: "Cloud & Deployment",
  skills: ["AWS (EC2, S3, Lambda)", "Vercel", "Render", "Netlify"]
}];
const coursework = ["Data Structures and Algorithms", "Database Management", "Artificial Intelligence", "Natural Language Processing", "OOPs using Java", "Operating Systems", "Big-Data Analytics", "Data Mining and Warehousing", "Computer Network"];
const Skills = () => {
  return <section id="skills" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">Skills & Expertise<span className="text-primary font-mono text-xl">02.</span> Skills & Expertise
          </h2>
          <div className="h-px bg-border flex-1 max-w-md" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => <div key={category.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => <span key={skill} className="px-3 py-1.5 text-sm font-mono bg-secondary text-muted-foreground rounded-md hover:text-primary hover:bg-primary/10 transition-colors">
                    {skill}
                  </span>)}
              </div>
            </div>)}
        </div>

        {/* Relevant Coursework */}
        <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap gap-3">
            {coursework.map(course => <span key={course} className="px-4 py-2 text-sm bg-secondary/50 text-muted-foreground rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all duration-300">
                {course}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;