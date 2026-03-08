import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Copy, Download, RefreshCw, Check, FileText } from "lucide-react";
import { toast } from "sonner";

interface PreviewPanelProps {
  coverLetter: string;
  isGenerating: boolean;
  onRegenerate: () => void;
}

const PreviewPanel = ({ coverLetter, isGenerating, onRegenerate }: PreviewPanelProps) => {
  const [editedLetter, setEditedLetter] = useState(coverLetter);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setEditedLetter(coverLetter);
  }, [coverLetter]);

  const wordCount = editedLetter
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(editedLetter);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = () => {
    // Simple text download as PDF placeholder
    const blob = new Blob([editedLetter], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cover-letter.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded! (PDF export coming with backend)");
  };

  const handleDownloadDOCX = () => {
    const blob = new Blob([editedLetter], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cover-letter.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded! (DOCX export coming with backend)");
  };

  if (isGenerating && !coverLetter) {
    return (
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg font-semibold">Your Cover Letter</h3>
          <div className="text-sm text-muted-foreground">Generating...</div>
        </div>
        <div className="flex-1 space-y-3 p-6 rounded-lg border border-border bg-card">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <div className="py-2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (!coverLetter && !isGenerating) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
          <FileText className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="font-display text-xl font-semibold mb-2">Your cover letter will appear here</h3>
        <p className="text-muted-foreground max-w-sm">
          Fill in your resume and job description on the left, then click generate to see the magic happen.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-lg font-semibold">Your Cover Letter</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{wordCount} words</span>
          {isGenerating && <span className="text-accent animate-pulse">• Streaming...</span>}
        </div>
      </div>

      <div className="flex-1 relative">
        <textarea
          value={editedLetter}
          onChange={(e) => setEditedLetter(e.target.value)}
          className="w-full h-full min-h-[400px] p-6 rounded-lg border border-border bg-card resize-none focus:outline-none focus:ring-2 focus:ring-accent/50 font-sans text-base leading-relaxed"
          placeholder="Your generated cover letter will appear here..."
        />
      </div>

      <div className="flex items-center gap-3 mt-4">
        <Button variant="outline" size="sm" onClick={onRegenerate} disabled={isGenerating}>
          <RefreshCw className="w-4 h-4" />
          Regenerate
        </Button>
        <Button variant="outline" size="sm" onClick={handleCopy}>
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy"}
        </Button>
        <Button variant="outline" size="sm" onClick={handleDownloadPDF}>
          <Download className="w-4 h-4" />
          PDF
        </Button>
        <Button variant="outline" size="sm" onClick={handleDownloadDOCX}>
          <Download className="w-4 h-4" />
          DOCX
        </Button>
      </div>
    </div>
  );
};

export default PreviewPanel;
