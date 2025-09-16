import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Welcome to MINNA! You'll receive 20% off your first order.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container-width section-padding">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Save 20% on Your Purchase Today.
          </h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter and get exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="btn-accent">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;