
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Broadcast } from "lucide-react";

const StudioPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
          Castify Studio
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your professional streaming command center. Manage your stream, engage with your audience, and grow your channel.
        </p>
        <Button asChild size="lg" className="bg-castify-purple hover:bg-castify-purple/90">
          <Link to="/dashboard">
            <Broadcast className="mr-2 h-5 w-5" />
            Launch Studio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default StudioPage;
