import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Lock, Sparkles, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PaywallModalProps {
  open: boolean;
  onClose: () => void;
}

const PaywallModal = ({ open, onClose }: PaywallModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-accent" />
          </div>
          <DialogTitle className="font-display text-2xl">You've used your free generations</DialogTitle>
          <DialogDescription className="text-base">
            Upgrade to Pro for unlimited cover letter generations at just $7/month.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4">
          {[
            "Unlimited generations",
            "All tone & length options",
            "PDF & DOCX export",
            "Generation history",
            "Priority support",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-accent" />
              </div>
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <Button variant="accent" size="lg" className="w-full" asChild>
            <Link to="/pricing">
              <Sparkles className="w-4 h-4" />
              Upgrade to Pro - $7/month
            </Link>
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Maybe later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaywallModal;
