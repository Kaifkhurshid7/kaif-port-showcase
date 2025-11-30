import { Github, Linkedin, Mail, MapPin, Phone, Code2 } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] animate-pulse-glow" style={{
      animationDelay: "1s"
    }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-10 animate-fade-in">
            <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full border-2 border-primary/30 overflow-hidden bg-gradient-to-br from-card to-background relative group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-[2px] rounded-full bg-card flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold text-gradient">KK</span>
              </div>
              {/* Replace the div above with an img tag when you have your photo */}
              {/* <img src="/your-photo.jpg" alt="Kaif Khurshid" className="w-full h-full object-cover" /> */}
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 animate-slide-up">
            Kaif Khurshid
          </h1>
          
          {/* Title */}
          <h2 style={{
          animationDelay: "0.1s"
        }} className="text-lg sm:text-xl md:text-2xl font-medium mb-8 animate-slide-up tracking-widest uppercase text-gray-200">
            Software Development Engineer
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up font-light" style={{
          animationDelay: "0.2s"
        }}>
            Backend-oriented Software Engineer skilled in{" "}
            <span className="text-primary font-medium">Python</span>,{" "}
            <span className="text-primary font-medium">Java</span>, and scalable system design, 
            with strong DSA fundamentals and hands-on experience building reliable, 
            high-performance applications.
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-slide-up" style={{
          animationDelay: "0.3s"
        }}>
            <MapPin size={14} className="text-primary" />
            <span className="text-sm font-light tracking-wide">Ramgarh, Jharkhand, India</span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 mb-12 animate-slide-up" style={{
          animationDelay: "0.4s"
        }}>
            <a href="mailto:kaifkhurshid18@gmail.com" className="p-3.5 rounded-xl bg-card/80 border border-border/50 hover:border-primary/50 hover:text-primary hover:bg-card transition-all duration-300 hover-lift backdrop-blur-sm" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="tel:+916204148753" className="p-3.5 rounded-xl bg-card/80 border border-border/50 hover:border-primary/50 hover:text-primary hover:bg-card transition-all duration-300 hover-lift backdrop-blur-sm" aria-label="Phone">
              <Phone size={18} />
            </a>
            <a href="https://linkedin.com/in/kaifkhurshid" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-card/80 border border-border/50 hover:border-primary/50 hover:text-primary hover:bg-card transition-all duration-300 hover-lift backdrop-blur-sm" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/kaifkhurshid" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-card/80 border border-border/50 hover:border-primary/50 hover:text-primary hover:bg-card transition-all duration-300 hover-lift backdrop-blur-sm" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://leetcode.com/kaifkhurshid" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-card/80 border border-border/50 hover:border-primary/50 hover:text-primary hover:bg-card transition-all duration-300 hover-lift backdrop-blur-sm" aria-label="LeetCode">
              <Code2 size={18} />
            </a>
          </div>
          
          {/* CTA Button */}
          <div className="animate-slide-up" style={{
          animationDelay: "0.5s"
        }}>
            <a href="#projects" className="inline-flex px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 glow-effect hover-lift text-sm tracking-wide uppercase">
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;