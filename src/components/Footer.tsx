import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary">&lt;</span>
            Kaif Khurshid
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:kaifkhurshid18@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/kaifkhurshid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/kaifkhurshid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://leetcode.com/kaifkhurshid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LeetCode"
            >
              <Code2 size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={14} className="text-primary fill-primary" /> by Kaif Khurshid
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
