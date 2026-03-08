import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, Loader2 } from "lucide-react";

interface InputPanelProps {
  resume: string;
  setResume: (value: string) => void;
  jobDescription: string;
  setJobDescription: (value: string) => void;
  tone: string;
  setTone: (value: string) => void;
  length: string;
  setLength: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const InputPanel = ({
  resume,
  setResume,
  jobDescription,
  setJobDescription,
  tone,
  setTone,
  length,
  setLength,
  onGenerate,
  isGenerating,
}: InputPanelProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = async (file: File) => {
    if (file.type === "text/plain" || file.name.endsWith(".txt")) {
      const text = await file.text();
      setResume(text);
    } else if (file.type === "application/pdf") {
      // For now, show a message that PDF parsing is coming
      setResume("PDF uploaded: " + file.name + "\n\nPaste your resume text here for now while PDF parsing is being set up.");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileUpload(file);
  };

  return (
    <div className="space-y-6">
      {/* Resume Input */}
      <div className="space-y-3">
        <Label htmlFor="resume" className="text-base font-semibold">
          Your Resume / CV
        </Label>
        <div
          className={`relative rounded-lg border-2 border-dashed transition-colors ${
            isDragging ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <div className="absolute top-3 right-3 z-10">
            <label className="cursor-pointer">
              <input
                type="file"
                accept=".txt,.pdf"
                onChange={handleFileInput}
                className="hidden"
              />
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-sm font-medium hover:bg-secondary/80 transition-colors">
                <Upload className="w-4 h-4" />
                Upload
              </div>
            </label>
          </div>
          <Textarea
            id="resume"
            placeholder="Paste your resume text here, or drag & drop a file..."
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            className="min-h-[200px] resize-none border-0 focus-visible:ring-0 bg-transparent"
          />
        </div>
      </div>

      {/* Job Description */}
      <div className="space-y-3">
        <Label htmlFor="job-description" className="text-base font-semibold">
          Job Description
        </Label>
        <Textarea
          id="job-description"
          placeholder="Paste the job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="min-h-[180px] resize-none"
        />
      </div>

      {/* Tone & Length Selectors */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Tone</Label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="friendly">Friendly</SelectItem>
              <SelectItem value="bold">Bold</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Length</Label>
          <Select value={length} onValueChange={setLength}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="short">Short (~150 words)</SelectItem>
              <SelectItem value="medium">Medium (~250 words)</SelectItem>
              <SelectItem value="long">Long (~400 words)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Generate Button */}
      <Button
        variant="accent"
        size="lg"
        className="w-full"
        onClick={onGenerate}
        disabled={isGenerating || !resume.trim() || !jobDescription.trim()}
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <FileText className="w-5 h-5" />
            Generate Cover Letter
          </>
        )}
      </Button>
    </div>
  );
};

export default InputPanel;
