import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, FileText, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-light border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-navy-light">AI-Powered Cover Letters</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Land Your Dream Job
            <br />
            <span className="text-gradient">in 30 Seconds</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Upload your resume, paste the job description, and watch as AI crafts a 
            <span className="text-foreground font-medium"> personalized, compelling </span> 
            cover letter tailored perfectly to the role.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/app" className="flex items-center gap-2">
                Generate Your Cover Letter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#features">See How It Works</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-accent" />
              <span>10,000+ cover letters generated</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>30 seconds average</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Preview */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-2xl border border-border shadow-2xl overflow-hidden bg-card">
            <div className="aspect-[16/9] md:aspect-[2/1] bg-gradient-to-br from-secondary via-background to-green-light/20 p-8 flex items-center justify-center">
              <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
                {/* Left Panel Preview */}
                <div className="space-y-4">
                  <div className="h-4 bg-muted rounded w-1/3" />
                  <div className="h-32 bg-muted rounded-lg" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="h-24 bg-muted rounded-lg" />
                </div>
                {/* Right Panel Preview */}
                <div className="space-y-3 bg-background/50 backdrop-blur rounded-lg p-6 border border-border">
                  <div className="h-3 bg-accent/30 rounded w-2/3" />
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-5/6" />
                  <div className="h-3 bg-muted rounded w-4/5" />
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-3/4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
