
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const StartStreamingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
          Start Streaming on Castify
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Begin your streaming journey with Castify. Share your passion with the world and build your community.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-4">New to Streaming?</h3>
            <p className="text-muted-foreground mb-4">
              Get started with our beginner-friendly guide to streaming. Learn the basics and best practices.
            </p>
            <Button asChild variant="outline">
              <Link to="/creators">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-4">Ready to Stream?</h3>
            <p className="text-muted-foreground mb-4">
              Launch Castify Studio and start streaming to your audience right away.
            </p>
            <Button asChild>
              <Link to="/studio">
                Open Castify Studio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartStreamingPage;
