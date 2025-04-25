
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PartnersPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        Castify Partner Program
      </h1>
      <p className="text-xl text-muted-foreground mb-12">
        Join our exclusive partner program and take your streaming career to new heights.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">Requirements</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Stream for 25 hours in the last 30 days</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Average 75 viewers per stream</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>At least 1000 followers</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">Benefits</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Custom subscriber badges</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Priority support access</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Revenue sharing opportunities</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Custom channel emotes</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Ad revenue sharing</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Exclusive partner events</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-castify-purple hover:bg-castify-purple/90">
          Apply for Partnership
        </Button>
      </div>
    </div>
  );
};

export default PartnersPage;
