import { FileText, Sparkles, Download, Sliders, Clock, RefreshCw } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume & Job Matching",
    description: "Upload your resume and paste any job description. Our AI analyzes both to find the perfect match points.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Writing",
    description: "Watch as GPT-4 crafts a compelling, personalized cover letter in real-time with streaming text.",
  },
  {
    icon: Sliders,
    title: "Tone & Length Control",
    description: "Choose from Professional, Friendly, or Bold tones. Select short, medium, or long formats.",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Regeneration",
    description: "Not satisfied? Regenerate with one click until you get the perfect cover letter.",
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description: "Download your cover letter as PDF or DOCX. Copy to clipboard with one click.",
  },
  {
    icon: Clock,
    title: "30-Second Generation",
    description: "No more hours of writing. Get a polished, tailored cover letter in under a minute.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="text-gradient"> Stand Out</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you create the perfect cover letter, every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
