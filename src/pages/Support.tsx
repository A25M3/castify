
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { HelpCircle, Shield, Book, Users } from "lucide-react";

const SupportPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        Support Center
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Get help with Castify. Find answers to common questions and learn how to make the most of your streaming experience.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <HelpCircle className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-2">Help Center</h3>
          <p className="text-muted-foreground mb-4">Find answers to common questions about streaming on Castify.</p>
          <Button asChild variant="outline">
            <Link to="/support">Browse FAQs</Link>
          </Button>
        </Card>
        
        <Card className="p-6">
          <Shield className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-2">Safety Resources</h3>
          <p className="text-muted-foreground mb-4">Learn about our community guidelines and safety measures.</p>
          <Button asChild variant="outline">
            <Link to="/safety">Safety Center</Link>
          </Button>
        </Card>
        
        <Card className="p-6">
          <Book className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-2">Creator Resources</h3>
          <p className="text-muted-foreground mb-4">Access guides and resources to grow your channel.</p>
          <Button asChild variant="outline">
            <Link to="/creators">Creator Guide</Link>
          </Button>
        </Card>
        
        <Card className="p-6">
          <Users className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-2">Partner Program</h3>
          <p className="text-muted-foreground mb-4">Learn about becoming a Castify Partner.</p>
          <Button asChild variant="outline">
            <Link to="/partners">Partner Info</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default SupportPage;
