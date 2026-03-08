import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-display font-bold text-xl">ApplyAI</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">
              Testimonials
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ApplyAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
