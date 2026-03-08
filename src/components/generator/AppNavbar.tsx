import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowLeft } from "lucide-react";

interface AppNavbarProps {
  generationsUsed: number;
  maxFreeGenerations: number;
}

const AppNavbar = ({ generationsUsed, maxFreeGenerations }: AppNavbarProps) => {
  return (
    <nav className="h-16 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <div className="h-6 w-px bg-border" />
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="font-display font-bold text-lg">ApplyAI</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm">
            <span className="text-muted-foreground">Free:</span>
            <span className="font-semibold">
              {generationsUsed}/{maxFreeGenerations} used
            </span>
          </div>
          <Button variant="accent" size="sm" asChild>
            <Link to="/pricing">Upgrade to Pro</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
