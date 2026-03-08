import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowLeft, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AppNavbarProps {
  generationsUsed: number;
  maxFreeGenerations: number;
}

const AppNavbar = ({ generationsUsed, maxFreeGenerations }: AppNavbarProps) => {
  const { user, signOut } = useAuth();

  const displayName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split("@")[0] || "User";
  const avatarUrl = user?.user_metadata?.avatar_url;
  const initials = displayName.slice(0, 2).toUpperCase();

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
          <Button variant="outline" size="sm" disabled>
            Pro — Coming Soon
          </Button>
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={avatarUrl} />
              <AvatarFallback className="text-xs bg-primary text-primary-foreground">{initials}</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="sm" onClick={signOut} className="gap-1">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
