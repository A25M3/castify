
import { Rocket, Trophy, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CreatorsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        Creator Resources
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Everything you need to succeed as a Castify creator. Access guides, tips, and tools to grow your channel.
      </p>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="p-6 rounded-lg border bg-card">
          <Rocket className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
          <p className="text-muted-foreground mb-4">
            Learn the basics of streaming on Castify and set up your channel for success.
          </p>
          <Button asChild variant="outline">
            <Link to="/start-streaming">Start Streaming</Link>
          </Button>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <Trophy className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-4">Partner Program</h3>
          <p className="text-muted-foreground mb-4">
            Take your channel to the next level by becoming a Castify Partner.
          </p>
          <Button asChild variant="outline">
            <Link to="/partners">Learn More</Link>
          </Button>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <Users className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-4">Community Building</h3>
          <p className="text-muted-foreground mb-4">
            Tips and strategies for growing and engaging with your audience.
          </p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <TrendingUp className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-4">Analytics & Growth</h3>
          <p className="text-muted-foreground mb-4">
            Understand your metrics and optimize your content strategy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatorsPage;
