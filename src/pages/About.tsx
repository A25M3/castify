
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        About Castify
      </h1>
      <div className="max-w-4xl">
        <p className="text-xl text-muted-foreground mb-8">
          Castify is the next generation streaming platform, built for creators and their communities.
        </p>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower creators to share their passion with the world and build meaningful connections through live streaming.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the most creator-friendly and innovative streaming platform, setting new standards for live entertainment.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <Link to="/careers">Join Our Team</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/press">Press Kit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
