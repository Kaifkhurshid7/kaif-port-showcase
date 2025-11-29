import { Github, Linkedin, Mail, MapPin, Phone, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
            Hi, my name is
          </p>
          
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-slide-up">
            Kaif Khurshid
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            I build things for the <span className="text-gradient">backend</span>.
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Backend-oriented Software Engineer skilled in{" "}
            <span className="text-primary">Python</span>,{" "}
            <span className="text-primary">Java</span>, and scalable system design, 
            with strong DSA fundamentals and hands-on experience building reliable, 
            high-performance applications.
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">Ramgarh, Jharkhand, India</span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="mailto:kaifkhurshid18@gmail.com"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover-lift"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+916204148753"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover-lift"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://linkedin.com/in/kaifkhurshid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/kaifkhurshid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover-lift"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://leetcode.com/kaifkhurshid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover-lift"
              aria-label="LeetCode"
            >
              <Code2 size={20} />
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 glow-effect hover-lift w-full sm:w-auto text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
