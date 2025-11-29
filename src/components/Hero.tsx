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
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-primary/50 overflow-hidden bg-card relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold text-primary">KK</span>
              </div>
              {/* Replace the div above with an img tag when you have your photo */}
              {/* <img src="/your-photo.jpg" alt="Kaif Khurshid" className="w-full h-full object-cover" /> */}
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 animate-slide-up tracking-tight">
            Kaif Khurshid
          </h1>
          
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-primary mb-6 animate-slide-up tracking-wide" style={{ animationDelay: "0.1s" }}>
            Software Development Engineer
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Backend-oriented Software Engineer skilled in{" "}
            <span className="text-primary font-medium">Python</span>,{" "}
            <span className="text-primary font-medium">Java</span>, and scalable system design, 
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
          
          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="#projects"
              className="inline-flex px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 glow-effect hover-lift"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
