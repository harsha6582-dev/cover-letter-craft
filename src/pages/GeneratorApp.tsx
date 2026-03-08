import { useState, useEffect } from "react";
import AppNavbar from "@/components/generator/AppNavbar";
import InputPanel from "@/components/generator/InputPanel";
import PreviewPanel from "@/components/generator/PreviewPanel";
import PaywallModal from "@/components/generator/PaywallModal";
import { toast } from "sonner";

const MAX_FREE_GENERATIONS = 3;
const STORAGE_KEY = "applyai_generations";

const GeneratorApp = () => {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [tone, setTone] = useState("professional");
  const [length, setLength] = useState("medium");
  const [coverLetter, setCoverLetter] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationsUsed, setGenerationsUsed] = useState(0);
  const [showPaywall, setShowPaywall] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setGenerationsUsed(parseInt(stored, 10));
    }
  }, []);

  const incrementGenerations = () => {
    const newCount = generationsUsed + 1;
    setGenerationsUsed(newCount);
    localStorage.setItem(STORAGE_KEY, newCount.toString());
  };

  const handleGenerate = async () => {
    // Check if user has exceeded free limit
    if (generationsUsed >= MAX_FREE_GENERATIONS) {
      setShowPaywall(true);
      return;
    }

    if (!resume.trim() || !jobDescription.trim()) {
      toast.error("Please provide both your resume and the job description.");
      return;
    }

    setIsGenerating(true);
    setCoverLetter("");

    // Simulate streaming for now (will be replaced with Lovable AI)
    const mockLetter = generateMockCoverLetter(resume, jobDescription, tone, length);
    
    // Simulate streaming effect
    for (let i = 0; i < mockLetter.length; i += 3) {
      await new Promise((resolve) => setTimeout(resolve, 10));
      setCoverLetter(mockLetter.slice(0, i + 3));
    }

    setCoverLetter(mockLetter);
    setIsGenerating(false);
    incrementGenerations();
    toast.success("Cover letter generated!");
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppNavbar generationsUsed={generationsUsed} maxFreeGenerations={MAX_FREE_GENERATIONS} />
      
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid lg:grid-cols-2 gap-8 h-full">
            {/* Left Panel - Inputs */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <InputPanel
                resume={resume}
                setResume={setResume}
                jobDescription={jobDescription}
                setJobDescription={setJobDescription}
                tone={tone}
                setTone={setTone}
                length={length}
                setLength={setLength}
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
              />
            </div>

            {/* Right Panel - Preview */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <PreviewPanel
                coverLetter={coverLetter}
                isGenerating={isGenerating}
                onRegenerate={handleRegenerate}
              />
            </div>
          </div>
        </div>
      </div>

      <PaywallModal open={showPaywall} onClose={() => setShowPaywall(false)} />
    </div>
  );
};

// Mock function - will be replaced with actual AI call
function generateMockCoverLetter(resume: string, jobDescription: string, tone: string, length: string): string {
  const wordCounts = { short: 150, medium: 250, long: 400 };
  const targetWords = wordCounts[length as keyof typeof wordCounts] || 250;

  const toneStyle = {
    professional: "formal and polished",
    friendly: "warm and approachable",
    bold: "confident and assertive",
  };

  return `Dear Hiring Manager,

I am writing to express my strong interest in this position. After reviewing the job description, I am confident that my skills and experience make me an excellent candidate for this role.

Throughout my career, I have developed expertise in areas directly relevant to this position. My background has prepared me to excel in fast-paced environments where attention to detail and strong communication skills are essential.

What excites me most about this opportunity is the chance to contribute to a team that values innovation and excellence. I am particularly drawn to the challenges outlined in the job description and believe my experience would allow me to make meaningful contributions from day one.

I have a proven track record of delivering results and working effectively with cross-functional teams. My ${toneStyle[tone as keyof typeof toneStyle]} communication style has helped me build strong relationships with colleagues and stakeholders alike.

I would welcome the opportunity to discuss how my background and skills would benefit your team. Thank you for considering my application.

Best regards,
[Your Name]`;
}

export default GeneratorApp;
